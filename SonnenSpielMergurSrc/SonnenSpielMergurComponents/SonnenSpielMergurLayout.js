import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SonnenSpielMergurLayout = ({ children }) => {
  return (
    <LinearGradient colors={['#00195E', '#001B2D']} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default SonnenSpielMergurLayout;
