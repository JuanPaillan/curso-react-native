import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //se importa el lineargradient

export default function App() {
  return (
    <LinearGradient
      colors={['#e30224', '#0e0b29', '#4375c5']} //colores para el degradez
      style={styles.container}
    >
      <StatusBar style="auto" />

      {/* ScrollView para permitir desplazamiento si es necesario */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <Image //card 1
            source={{ uri: 'https://estacion40.com.py/wp-content/uploads/2024/09/el-reguetonero-jhay-cortez-incluyo-a-venezuela-en-su-gira-106268.jpg' }}
            style={styles.image}
          />
          <Text style={styles.artistName}>JHAYCO</Text>
          <Text style={styles.subtitle}>Cantante y compositor puertorriqueño</Text>
          <Text style={styles.description}>
            Cantante puertorriqueño de trap y reggaetón, conocido por su estilo único y colaboraciones con artistas como Bad Bunny.
          </Text>
        </View>

        <View style={styles.card}>
          <Image //card 2
            source={{ uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/E7GTD66CIBHR5KNGJ3NXCUZN3M.jpg' }} 
            style={styles.image}
          />
          <Text style={styles.artistName}>Mora</Text>
          <Text style={styles.subtitle}>Cantante y compositor puertorriqueño</Text>
          <Text style={styles.description}>
            Artista puertorriqueño que fusiona reggaetón, trap y pop, destacado por sus melodías pegajosas y letras emocionales.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 29,
  },
  scrollView: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    maxWidth: 350,
    padding: 15,
    marginBottom: 35, //espacio entre las cards
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, //sombra en android
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover', 
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

