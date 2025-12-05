import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Share,
} from 'react-native';
import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const SonnenSpielMergurBlogDetails = () => {
  const navigation = useNavigation();
  const { article } = useRoute().params;

  const shareBlogArticle = async () => {
    try {
      await Share.share({
        message: `${article.title}\n\n${article.excerpt}`,
      });
    } catch (e) {
      console.log('Share error', e);
    }
  };

  return (
    <SonnenSpielMergurLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/spielerguback.png')}
              />
            </TouchableOpacity>

            <Text style={styles.title}>Blog</Text>
          </View>
        </View>
        <View style={styles.containerdetails}>
          <Text style={styles.cardTitle}>{article.title}</Text>
          <Text style={styles.full}>{article.full}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.shareBtn}
            activeOpacity={0.7}
            onPress={() => shareBlogArticle()}
          >
            <LinearGradient
              colors={['#F8AA03', '#FABD07', '#FC9F00']}
              style={styles.shareGradient}
            >
              <Text style={styles.shareText}>Share</Text>
              <Image
                source={require('../../assets/images/spielergurshr.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: height * 0.07,
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
  header: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  full: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '300',
    marginTop: 15,
    textAlign: 'center',
  },
  containerdetails: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 22,
    padding: 20,
  },
});

export default SonnenSpielMergurBlogDetails;
