import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Vibration,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../SonnenSpielMergurStore/sonnenSpielMergurContext';
import {
  spielMergurQuizQuestions,
  spielMergurLocationsByCategory,
} from '../SonnenSpielMergurData/sonnenSpielMergurInfo';
const { height } = Dimensions.get('window');

const SonnenSpielMergurLocations = () => {
  const [spielMergurStage, setSpielMergurStage] = useState('quiz');
  const [spielMergurQuestionIndex, setSpielMergurQuestionIndex] = useState(0);
  const [spielMergurSelectedAnswer, setSpielMergurSelectedAnswer] =
    useState(null);
  const [spielMergurFinalCategory, setSpielMergurFinalCategory] =
    useState(null);
  const [spielMergurRandomQuestions, setSpielMergurRandomQuestions] = useState(
    [],
  );
  const [spielMergurScore, setSpielMergurScore] = useState({
    A: 0,
    B: 0,
    C: 0,
  });
  const { isEnabledSpielMergurVibration } = useStore();
  const navigation = useNavigation();

  useEffect(() => {
    const shuffled = [...spielMergurQuizQuestions].sort(
      () => Math.random() - 0.5,
    );
    setSpielMergurRandomQuestions(shuffled.slice(0, 4));
  }, []);

  const spielMergurNext = () => {
    if (!spielMergurSelectedAnswer) return;

    if (isEnabledSpielMergurVibration) {
      Vibration.vibrate(50);
    }

    setSpielMergurScore(prev => ({
      ...prev,
      [spielMergurSelectedAnswer]: prev[spielMergurSelectedAnswer] + 1,
    }));

    if (spielMergurQuestionIndex === 3) {
      spielMergurFinishQuiz();
    } else {
      setSpielMergurQuestionIndex(spielMergurQuestionIndex + 1);
      setSpielMergurSelectedAnswer(null);
    }
  };

  const spielMergurFinishQuiz = () => {
    const finalScores = {
      ...spielMergurScore,
      [spielMergurSelectedAnswer]:
        spielMergurScore[spielMergurSelectedAnswer] + 1,
    };

    const winner = spielMergurGetWinnerCategory(finalScores);
    setSpielMergurFinalCategory(winner);
    setSpielMergurStage('result');
  };

  const spielMergurGetWinnerCategory = s => {
    if (s.A >= s.B && s.A >= s.C) return 'A';
    if (s.B >= s.A && s.B >= s.C) return 'B';
    return 'C';
  };

  if (spielMergurRandomQuestions.length === 0) return null;

  const Q = spielMergurRandomQuestions[spielMergurQuestionIndex];

  return (
    <SonnenSpielMergurLayout>
      <View style={styles.spielMergurContainer}>
        {spielMergurStage === 'quiz' && (
          <>
            <View style={styles.spielMergurHeadWrap}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ position: 'absolute', left: 0, zIndex: 10 }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={require('../../assets/images/spielerguback.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.spielMergurQuestionBox}>
              <Text style={styles.spielMergurQuestion}>{Q.question}</Text>
            </View>

            {Q.answers.map((item, idx) => {
              const isSelected = spielMergurSelectedAnswer === item.category;

              return (
                <TouchableOpacity
                  key={idx}
                  activeOpacity={0.7}
                  onPress={() => setSpielMergurSelectedAnswer(item.category)}
                  style={[
                    styles.spielMergurAnswerWrap,
                    isSelected && styles.spielMergurSelectedAnswer,
                  ]}
                >
                  <Text style={styles.spielMergurAnswerText}>{item.text}</Text>
                </TouchableOpacity>
              );
            })}

            <View
              style={{
                marginBottom: 40,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!spielMergurSelectedAnswer}
                onPress={spielMergurNext}
                style={{
                  width: '72%',
                  height: 60,
                  alignSelf: 'center',
                  opacity: spielMergurSelectedAnswer ? 1 : 0.7,
                  marginTop: 30,
                }}
              >
                <LinearGradient
                  colors={['#F8AA03', '#FABD07', '#FC9F00']}
                  style={styles.spielMergurNextBtn}
                >
                  <Text style={styles.spielMergurNextText}>
                    {spielMergurQuestionIndex === 3 ? 'Finish' : 'Next'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
        )}

        {spielMergurStage === 'result' && (
          <View>
            <View style={styles.spielMergurHeadWrap}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  position: 'absolute',
                  left: 0,
                  zIndex: 10,
                }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={require('../../assets/images/spielerguback.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ height: 50 }} />

            {spielMergurLocationsByCategory[spielMergurFinalCategory].map(
              (loc, idx) => (
                <View key={idx} style={styles.spielMergurCard}>
                  <Image source={loc.image} style={styles.spielMergurPhoto} />
                  <Text style={styles.spielMergurTitle}>{loc.title}</Text>
                  <Text style={styles.spielMergurCoords}>{loc.coords}</Text>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.spielMergurOpenBtn}
                    onPress={() =>
                      navigation.navigate('SonnenSpielMergurCardDetails', {
                        loc,
                      })
                    }
                  >
                    <LinearGradient
                      colors={['#F8AA03', '#FABD07', '#FC9F00']}
                      style={styles.spielMergurOpenGradient}
                    >
                      <Text style={styles.spielMergurOpenText}>Open</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ),
            )}
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
    paddingTop: height * 0.07,
  },
  spielMergurQuestionBox: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 25,
    borderRadius: 20,
    marginVertical: 39,
    marginBottom: height * 0.07,
  },
  spielMergurQuestion: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  spielMergurHeadWrap: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  spielMergurAnswerWrap: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    minHeight: 50,
  },
  spielMergurSelectedAnswer: {
    borderWidth: 10,
    borderColor: '#FFF',
    borderRadius: 30,
  },
  spielMergurAnswerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  spielMergurNextBtn: {
    flex: 1,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spielMergurNextText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  spielMergurCard: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    marginBottom: 30,
    overflow: 'hidden',
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
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 5,
    marginBottom: 8,
  },
  spielMergurCoords: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  spielMergurOpenBtn: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
  spielMergurOpenGradient: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spielMergurOpenText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
});

export default SonnenSpielMergurLocations;
