import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import SonnenSpielMergurLayout from '../SonnenSpielMergurComponents/SonnenSpielMergurLayout';
import { useNavigation } from '@react-navigation/native';
import { blogArticles as spielMergurBlogArticles } from '../SonnenSpielMergurData/sonnenSpielMergurInfo';

const { height } = Dimensions.get('window');

const SonnenSpielMergurBlog = () => {
  const spielMergurNavigation = useNavigation();

  return (
    <SonnenSpielMergurLayout>
      <View>
        <View style={styles.spielMergurHeader}>
          <TouchableOpacity onPress={() => spielMergurNavigation.goBack()}>
            <Image source={require('../../assets/images/spielerguback.png')} />
          </TouchableOpacity>

          <Text style={styles.spielMergurTitle}>Blog</Text>
        </View>

        {spielMergurBlogArticles.map(article => (
          <TouchableOpacity
            key={article.id}
            activeOpacity={0.7}
            style={styles.spielMergurCard}
            onPress={() =>
              spielMergurNavigation.navigate('SonnenSpielMergurBlogDetails', {
                article,
              })
            }
          >
            <Text style={styles.spielMergurCardTitle}>{article.title}</Text>
            <Text style={styles.spielMergurCardExcerpt}>{article.excerpt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SonnenSpielMergurLayout>
  );
};

const styles = StyleSheet.create({
  spielMergurHeader: {
    paddingTop: height * 0.07,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 30,
  },
  spielMergurTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  spielMergurCard: {
    marginHorizontal: 25,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 22,
    padding: 20,
  },
  spielMergurCardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  spielMergurCardExcerpt: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
});

export default SonnenSpielMergurBlog;
