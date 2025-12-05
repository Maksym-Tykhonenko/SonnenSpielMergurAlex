import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStore } from '../SonnenSpielMergurStore/sonnenSpielMergurContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const SonnenSpielMergurSettings = () => {
  const navigation = useNavigation();

  const {
    setIsEnabledSpielMergurMusic,
    isEnabledSpielMergurMusic,
    setIsEnabledSpielMergurVibration,
    isEnabledSpielMergurVibration,
  } = useStore();

  const toggleSpielMergurMusic = async value => {
    try {
      await AsyncStorage.setItem('spielmergurmusic', JSON.stringify(value));
      setIsEnabledSpielMergurMusic(value);
    } catch (error) {
      console.log('Error saving music setting:', error);
    }
  };

  const toggleSpielMergurVibration = async value => {
    try {
      await AsyncStorage.setItem('spielmergurvibration', JSON.stringify(value));
      setIsEnabledSpielMergurVibration(value);
    } catch (error) {
      console.log('Error saving vibration setting:', error);
    }
  };

  return (
    <SonnenSpielMergurLayout>
      <View style={styles.spielMergurContainer}>
        <View style={styles.spielMergurHeadWrap}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ position: 'absolute', left: 0, zIndex: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Image source={require('../../assets/images/spielerguback.png')} />
          </TouchableOpacity>

          <Text style={styles.spielMergurHeadTitle}>Settings</Text>
        </View>

        {Platform.OS === 'ios' && (
          <>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => toggleSpielMergurMusic(!isEnabledSpielMergurMusic)}
              style={styles.spielMergurSettingWrapper}
            >
              <Text style={styles.spielMergurSubtitle}>Music</Text>
              {isEnabledSpielMergurMusic ? (
                <Image
                  source={require('../../assets/images/spielerguon.png')}
                />
              ) : (
                <Image
                  source={require('../../assets/images/spielerguoff.png')}
                />
              )}
            </TouchableOpacity>
            <View style={styles.spielMergurUnderline} />
          </>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            toggleSpielMergurVibration(!isEnabledSpielMergurVibration)
          }
          style={styles.spielMergurSettingWrapper}
        >
          <Text style={styles.spielMergurSubtitle}>Vibration</Text>
          {isEnabledSpielMergurVibration ? (
            <Image source={require('../../assets/images/spielerguon.png')} />
          ) : (
            <Image source={require('../../assets/images/spielerguoff.png')} />
          )}
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <View
            style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 20 }}
          >
            <TouchableOpacity
              style={styles.shareBtn}
              onPress={() =>
                Linking.openURL(
                  'https://apps.apple.com/us/app/sonnen-spiel-mergur/id6755956807',
                )
              }
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={['#F8AA03', '#FABD07', '#FC9F00']}
                style={styles.shareGradient}
              >
                <Text style={styles.shareText}>Share the app</Text>
                <Image
                  source={require('../../assets/images/spielergurshr.png')}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurContainer: {
    flex: 1,
    padding: 30,
    paddingTop: height * 0.06,
  },
  spielMergurHeadWrap: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 40,
  },
  shareBtn: {
    width: '100%',
    marginRight: 18,
    height: 40,
  },
  shareGradient: {
    flex: 1,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  shareText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  spielMergurSettingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spielMergurHeadTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
  },
  spielMergurSubtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 12,
    fontWeight: '600',
  },
  spielMergurUnderline: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginTop: 12,
    marginBottom: 22,
  },
});

export default SonnenSpielMergurSettings;
