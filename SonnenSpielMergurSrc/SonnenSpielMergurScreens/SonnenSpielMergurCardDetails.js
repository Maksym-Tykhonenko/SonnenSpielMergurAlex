import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';

const { height } = Dimensions.get('window');

const spielMergurStorageKey = 'spielMergurSavedLocations';
const spielMergurVisitedKey = 'spielMergurVisitedLocations';

const SonnenSpielMergurCardDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { loc } = route.params;
  const [spielMergurSaved, setSpielMergurSaved] = useState(false);
  const [spielMergurVisited, setSpielMergurVisited] = useState(false);
  const [spielMergurLat, spielMergurLng] = loc.coords.split(',').map(Number);

  useFocusEffect(
    useCallback(() => {
      spielMergurCheckIfSaved();
      spielMergurCheckIfVisited();
    }, []),
  );

  const spielMergurCheckIfSaved = async () => {
    const json = await AsyncStorage.getItem(spielMergurStorageKey);
    const parsed = json ? JSON.parse(json) : [];
    const exists = parsed.some(item => item.title === loc.title);
    setSpielMergurSaved(exists);
  };

  const spielMergurToggleSave = async () => {
    let json = await AsyncStorage.getItem(spielMergurStorageKey);
    let savedArr = json ? JSON.parse(json) : [];

    if (spielMergurSaved) {
      const filtered = savedArr.filter(item => item.title !== loc.title);
      await AsyncStorage.setItem(
        spielMergurStorageKey,
        JSON.stringify(filtered),
      );
      setSpielMergurSaved(false);
    } else {
      const updated = [...savedArr, loc];
      await AsyncStorage.setItem(
        spielMergurStorageKey,
        JSON.stringify(updated),
      );
      setSpielMergurSaved(true);
    }
  };

  const spielMergurCheckIfVisited = async () => {
    const json = await AsyncStorage.getItem(spielMergurVisitedKey);
    const arr = json ? JSON.parse(json) : [];
    const exists = arr.includes(loc.title);
    setSpielMergurVisited(exists);
  };

  const spielMergurMarkVisited = async () => {
    const json = await AsyncStorage.getItem(spielMergurVisitedKey);
    const arr = json ? JSON.parse(json) : [];

    if (!arr.includes(loc.title)) {
      const updated = [...arr, loc.title];
      await AsyncStorage.setItem(
        spielMergurVisitedKey,
        JSON.stringify(updated),
      );
    }

    setSpielMergurVisited(true);
  };

  const spielMergurShare = async () => {
    await Share.share({
      message: `${loc.title}\nCoordinates: ${loc.coords}\n${loc.details}`,
    });
  };

  return (
    <SonnenSpielMergurLayout>
      <ScrollView style={styles.spielMergurContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Image
            source={require('../../assets/images/spielerguback.png')}
            style={{ marginBottom: 30 }}
          />
        </TouchableOpacity>

        <View style={styles.spielMergurCard}>
          <Image source={loc.image} style={styles.spielMergurPhoto} />

          <Text style={styles.spielMergurTitle}>{loc.title}</Text>
          <Text style={styles.spielMergurCoords}>{loc.coords}</Text>

          <Text style={styles.spielMergurDesc}>{loc.details}</Text>
        </View>

        <View style={styles.spielMergurButtonRow}>
          <TouchableOpacity
            style={styles.spielMergurShareBtn}
            onPress={spielMergurShare}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={styles.spielMergurShareGradient}
            >
              <Text style={styles.spielMergurShareText}>Share</Text>
              <Image
                source={require('../../assets/images/spielergurshr.png')}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.spielMergurVisitBtn}
            activeOpacity={0.7}
            onPress={spielMergurMarkVisited}
            disabled={spielMergurVisited}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={styles.spielMergurVisitGradient}
            >
              <Text
                style={[
                  styles.spielMergurVisitText,
                  spielMergurVisited && { color: '#fff' },
                ]}
              >
                {spielMergurVisited ? 'Visited' : 'Visit'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={spielMergurToggleSave} activeOpacity={0.7}>
            <ImageBackground
              source={require('../../assets/images/spielergurframe2.png')}
              style={styles.spielMergurSaveFrame}
            >
              <Image
                source={
                  spielMergurSaved
                    ? require('../../assets/images/spielergursv.png')
                    : require('../../assets/images/spielergursvd.png')
                }
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.spielMergurMapWrap}>
          <MapView
            style={styles.spielMergurMap}
            initialRegion={{
              latitude: spielMergurLat,
              longitude: spielMergurLng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: spielMergurLat,
                longitude: spielMergurLng,
              }}
            >
              <View>
                <Image
                  source={require('../../assets/images/spielergurmark.png')}
                />
                <View style={styles.spielMergurMarkerPulse} />
              </View>
            </Marker>
          </MapView>
        </View>
      </ScrollView>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurContainer: {
    flex: 1,
    padding: 30,
    paddingTop: height * 0.07,
  },
  spielMergurCard: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    paddingBottom: 25,
    overflow: 'hidden',
    marginBottom: 25,
  },
  spielMergurPhoto: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 18,
    borderBottomWidth: 2,
  },
  spielMergurTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 8,
  },
  spielMergurCoords: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '300',
  },
  spielMergurDesc: {
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '400',
  },
  spielMergurButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  spielMergurShareBtn: {
    flex: 1,
    marginRight: 12,
    height: 40,
  },
  spielMergurShareGradient: {
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  spielMergurShareText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  spielMergurVisitBtn: {
    flex: 1,
    marginRight: 12,
    height: 40,
  },
  spielMergurVisitGradient: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spielMergurVisitText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  spielMergurSaveFrame: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spielMergurMapWrap: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    height: 300,
    marginBottom: 30,
  },
  spielMergurMap: {
    width: '100%',
    height: '100%',
  },
  spielMergurMarkerPulse: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 9,
    left: 9,
  },
});

export default SonnenSpielMergurCardDetails;
