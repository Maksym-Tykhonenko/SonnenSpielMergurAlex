import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import { useNavigation } from '@react-navigation/native';

const SonnenSpielMergurSaved = () => {
  const [spielMergurSavedLocations, setSpielMergurSavedLocations] = useState(
    [],
  );
  const navigation = useNavigation();

  useEffect(() => {
    spielMergurLoadSaved();
  }, []);

  const spielMergurLoadSaved = async () => {
    const json = await AsyncStorage.getItem('spielMergurSavedLocations');
    const data = json ? JSON.parse(json) : [];
    setSpielMergurSavedLocations(data);
  };

  return (
    <SonnenSpielMergurLayout>
      <View style={styles.spielMergurContainer}>
        <View style={styles.spielMergurHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/spielerguback.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Saved</Text>
          </View>
        </View>

        {spielMergurSavedLocations.length === 0 && (
          <Text style={styles.spielMergurEmptyText}>
            No saved locations yet.
          </Text>
        )}

        {spielMergurSavedLocations.map((loc, idx) => (
          <View key={idx} style={styles.spielMergurCard}>
            <Image source={loc.image} style={styles.spielMergurPhoto} />
            <Text style={styles.spielMergurTitle}>{loc.title}</Text>
            <Text style={styles.spielMergurCoords}>{loc.coords}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.spielMergurOpenBtn}
              onPress={() =>
                navigation.navigate('SonnenSpielMergurCardDetails', { loc })
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
        ))}
      </View>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurContainer: {
    padding: 30,
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  spielMergurHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  spielMergurEmptyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
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
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
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
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SonnenSpielMergurSaved;
