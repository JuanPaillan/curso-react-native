import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //se importa el lineargradient

import icon from './assets/LOG_AMBIENTE.png'; //logo de medioambiente de la municipalidad

export default function App() {
  return (
    <LinearGradient
      colors={['#f58723', '#fbbb0c', '#93a31c']} //colores para el degradez
      style={styles.container}
    >
        <Image source={icon} style={{ width: 250, height: 250 }} />
        <Text style={styles.mainText}>Municipalidad de Quinchao</Text>
        <Text style={styles.subText}>Departamento de Medioambiente</Text>

        <Image
        source={{ uri: 'https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png' }} //imagen de internet de google
        style={styles.googleLogo}
      />

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain', 
    marginBottom: 10,
  },
  mainText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'green',
  },
  subText: {
    fontSize: 13,
    fontWeight: '400',
    color: 'green',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',   
  },
  googleLogo: {
    width: 200, 
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 1, 
  }
});
