import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import LinearGradient from 'react-native-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import { useStore } from '../SonnenSpielMergurStore/sonnenSpielMergurContext';
import { spielMergurFacts } from '../SonnenSpielMergurData/sonnenSpielMergurInfo';

const { height } = Dimensions.get('window');

const SonnenSpielMergurMain = () => {
  const navigation = useNavigation();
  const {
    setIsEnabledSpielMergurMusic,
    isEnabledSpielMergurMusic,
    setIsEnabledSpielMergurVibration,
  } = useStore();

  const [spielMergurTrackIndex, setSpielMergurTrackIndex] = useState(0);
  const [spielMergurSound, setSpielMergurSound] = useState(null);
  const [spielMergurRandomFact, setSpielMergurRandomFact] = useState('');

  const spielMergurTracks = [
    'night-detective-226857.mp3',
    'night-detective-226857.mp3',
  ];

  useFocusEffect(
    useCallback(() => {
      const fact =
        spielMergurFacts[Math.floor(Math.random() * spielMergurFacts.length)];
      setSpielMergurRandomFact(fact);
    }, []),
  );

  const spielMergurShareFact = async () => {
    try {
      await Share.share({
        message: spielMergurRandomFact,
      });
    } catch (e) {
      console.log('Share error', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      spielMergurLoadBgMusic();
      spielMergurLoadVibration();
    }, []),
  );

  useEffect(() => {
    spielMergurPlayTrack(spielMergurTrackIndex);

    return () => {
      if (spielMergurSound) {
        spielMergurSound.stop(() => {
          spielMergurSound.release();
        });
      }
    };
  }, [spielMergurTrackIndex]);

  const spielMergurPlayTrack = index => {
    if (spielMergurSound) {
      spielMergurSound.stop(() => {
        spielMergurSound.release();
      });
    }

    const newSound = new Sound(
      spielMergurTracks[index],
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Error', error);
          return;
        }

        newSound.play(success => {
          if (success) {
            setSpielMergurTrackIndex(
              prev => (prev + 1) % spielMergurTracks.length,
            );
          } else {
            console.log('Sound play error');
          }
        });
        setSpielMergurSound(newSound);
      },
    );
  };

  useEffect(() => {
    const updateVolume = async () => {
      try {
        const savedValue = await AsyncStorage.getItem('spielmergurmusic');
        const isOn = JSON.parse(savedValue);

        setIsEnabledSpielMergurMusic(isOn);
        if (spielMergurSound) {
          spielMergurSound.setVolume(isOn ? 1 : 0);
        }
      } catch (e) {
        console.error(e);
      }
    };

    updateVolume();
  }, [spielMergurSound]);

  useEffect(() => {
    if (spielMergurSound) {
      spielMergurSound.setVolume(isEnabledSpielMergurMusic ? 1 : 0);
    }
  }, [spielMergurSound, isEnabledSpielMergurMusic]);

  const spielMergurLoadBgMusic = async () => {
    try {
      const savedValue = await AsyncStorage.getItem('spielmergurmusic');
      const isOn = JSON.parse(savedValue);
      setIsEnabledSpielMergurMusic(isOn);
    } catch {}
  };

  const spielMergurLoadVibration = async () => {
    try {
      const savedValue = await AsyncStorage.getItem('spielmergurvibration');
      if (savedValue !== null) {
        const isOn = JSON.parse(savedValue);
        setIsEnabledSpielMergurVibration(isOn);
      }
    } catch {}
  };

  return (
    <SonnenSpielMergurLayout>
      <View style={styles.spielMergurContainer}>
        <View style={styles.spielMergurHeaderRow}>
          <Image source={require('../../assets/images/spielerguronsun.png')} />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SonnenSpielMergurSettings')}
          >
            <ImageBackground
              style={styles.spielMergurFrame}
              source={require('../../assets/images/spielergurframe.png')}
            >
              <Image
                source={require('../../assets/images/spielergursett.png')}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.spielMergurFactContainer}>
          <Text style={styles.spielMergurTitle}>{spielMergurRandomFact}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={spielMergurShareFact}
            style={{ width: '100%', height: 40 }}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={styles.spielMergurShareGradient}
            >
              <Text style={styles.spielMergurButtonText}>Share</Text>
              <Image
                source={require('../../assets/images/spielergurshr.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.spielMergurButtonsRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SonnenSpielMergurLocations')}
            style={{ width: '52%', height: 60 }}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={styles.spielMergurStartBtn}
            >
              <Text style={styles.spielMergurButtonText}>Start test</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SonnenSpielMergurBlog')}
          >
            <ImageBackground
              style={styles.spielMergurFrame}
              source={require('../../assets/images/spielergurframe.png')}
            >
              <Image
                source={require('../../assets/images/spielergublog.png')}
              />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SonnenSpielMergurSaved')}
          >
            <ImageBackground
              style={styles.spielMergurFrame}
              source={require('../../assets/images/spielergurframe.png')}
            >
              <Image source={require('../../assets/images/spielergursv.png')} />
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.spielMergurUnderline} />

        <Text style={styles.spielMergurSubtitle}>
          <Text style={{ fontWeight: '700' }}>Germany</Text> - brief description
        </Text>

        <View style={styles.spielMergurIconsRow}>
          <Image source={require('../../assets/images/spielergucastle.png')} />
          <Image source={require('../../assets/images/spielergumap.png')} />
        </View>

        <Text
          style={[
            styles.spielMergurSubtitle,
            { textAlign: 'center', lineHeight: 21 },
          ]}
        >
          <Text style={{ fontWeight: '700' }}>Germany</Text> is a country rich
          in history, culture and architectural diversity. From medieval castles
          and Gothic cathedrals to innovative modern landmarks, it offers a
          unique blend of tradition and contemporary design. Its cities combine
          vibrant urban life with well-preserved old towns, while breathtaking
          landscapes surround many of its iconic buildings. Germany is a place
          where heritage, creativity and craftsmanship come together to shape
          unforgettable architectural experiences.
        </Text>
      </View>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurContainer: { flex: 1, padding: 30, paddingTop: height * 0.06 },
  spielMergurHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  spielMergurFrame: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spielMergurFactContainer: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 15,
    paddingTop: 22,
    borderRadius: 20,
  },
  spielMergurTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
  spielMergurShareGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
  },
  spielMergurButtonText: { color: '#000', fontSize: 20, fontWeight: '700' },
  spielMergurButtonsRow: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    marginTop: 30,
  },
  spielMergurStartBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 68,
  },
  spielMergurUnderline: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    marginBottom: 10,
  },
  spielMergurSubtitle: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: '300',
  },
  spielMergurIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 3,
    marginBottom: 23,
    flexWrap: 'wrap',
  },
});

export default SonnenSpielMergurMain;
