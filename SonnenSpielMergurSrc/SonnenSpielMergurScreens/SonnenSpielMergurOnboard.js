import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { spielMergurOnboardBgImages } from '../SonnenSpielMergurData/sonnenSpielMergurInfo';

const SonnenSpielMergurOnboard = () => {
  const [currSpieleMergurOnboardIndex, setCurrSpieleMergurOnboardIndex] =
    useState(0);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [showBestTrainWelcomeText, setShowBestTrainWelcomeText] =
    useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBestTrainWelcomeText(true);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;

    if (Platform.OS === 'ios') {
      timer = setTimeout(() => {
        setIsLoading(true);
      }, 3000);
    } else {
      timer = setTimeout(() => {
        setIsLoading(true);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <SonnenSpielMergurLayout>
      {!isLoading ? (
        <View style={styles.spielMergurWelcContainer}>
          {Platform.OS === 'ios' ? (
            <Image
              source={require('../../assets/images/spielergurwelcloader.png')}
            />
          ) : (
            <Image
              source={require('../../assets/images/andricon.png')}
              style={{ width: 300, height: 300, borderRadius: 22 }}
            />
          )}
          {showBestTrainWelcomeText && Platform.OS === 'ios' && (
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
              }}
            >
              <Image
                source={require('../../assets/images/spielergurwelctext.png')}
              />
            </Animated.View>
          )}
        </View>
      ) : (
        <ImageBackground
          source={spielMergurOnboardBgImages[currSpieleMergurOnboardIndex]}
          style={{ width: '100%', height: '100%' }}
        >
          <View
            style={[
              styles.spielMergurContainer,
              currSpieleMergurOnboardIndex === 3 && {
                justifyContent: 'center',
                height: 650,
              },
            ]}
          >
            {currSpieleMergurOnboardIndex !== 3 && (
              <Image
                source={require('../../assets/images/spielerguronsun.png')}
              />
            )}
            <Text style={styles.spielMergurTitle}>
              {currSpieleMergurOnboardIndex === 0 && 'Welcome to'}
              {currSpieleMergurOnboardIndex === 1 && 'Answer 4 Quick Questions'}
              {currSpieleMergurOnboardIndex === 2 &&
                'Get Your Curated Selection'}
              {currSpieleMergurOnboardIndex === 3 &&
                'Save, Explore, Personalize'}
            </Text>
            {currSpieleMergurOnboardIndex === 0 && (
              <>
                {Platform.OS === 'ios' ? (
                  <Image
                    source={require('../../assets/images/spielerguronlogo.png')}
                  />
                ) : (
                  <Text
                    style={[
                      styles.spielMergurTitle,
                      {
                        marginTop: 0,
                        top: -10,
                        color: '#FFD700',
                        fontSize: 24,
                      },
                    ]}
                  >
                    Sonnen Gold Quest
                  </Text>
                )}
              </>
            )}
            <Text style={styles.spielMergurSubtitle}>
              {currSpieleMergurOnboardIndex === 0 &&
                `Discover Germany through its most beautiful and remarkable
architectural facades. Your journey to personalized exploration
begins here.`}
              {currSpieleMergurOnboardIndex === 1 &&
                `Tell us what type of architecture inspires you. Your choices help us understand your style and match you with fitting locations.`}
              {currSpieleMergurOnboardIndex === 2 &&
                `Based on your answers, you’ll instantly receive a tailored set of nine remarkable buildings across Germany, each with coordinates and detailed descriptions.`}
              {currSpieleMergurOnboardIndex === 3 &&
                `Save your favorite places, read engaging historical insights and fine-tune your experience by adjusting sound and vibration settings.`}
            </Text>

            {currSpieleMergurOnboardIndex === 0 && (
              <Image
                source={require('../../assets/images/spielerguronimg1.png')}
              />
            )}
            {currSpieleMergurOnboardIndex === 1 && (
              <Image
                source={require('../../assets/images/spielerguronimg2.png')}
              />
            )}
            {currSpieleMergurOnboardIndex === 2 && (
              <Image
                source={require('../../assets/images/spielerguronimg3.png')}
              />
            )}
            {currSpieleMergurOnboardIndex === 3 && (
              <Image
                source={require('../../assets/images/spielerguronimg4.png')}
                style={{ marginTop: 60 }}
              />
            )}
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              currSpieleMergurOnboardIndex === 3
                ? navigation.replace('SonnenSpielMergurMain')
                : setCurrSpieleMergurOnboardIndex(
                    currSpieleMergurOnboardIndex + 1,
                  )
            }
            style={styles.spielMergurButtonContainer}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 68,
              }}
            >
              <Text style={styles.spielMergurButtonText}>
                {currSpieleMergurOnboardIndex === 0 && 'Continue'}
                {currSpieleMergurOnboardIndex === 1 && 'Start the Quiz'}
                {currSpieleMergurOnboardIndex === 2 && 'Show Me My Results'}
                {currSpieleMergurOnboardIndex === 3 && 'Begin Exploring'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurWelcContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  spielMergurContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  spielMergurTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  spielMergurSubtitle: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 26,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 60,
  },
  spielMergurButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  spielMergurButtonContainer: {
    width: '75%',
    height: 60,
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});

export default SonnenSpielMergurOnboard;
