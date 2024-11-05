import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //se importa el lineargradient

export default function App() {
  return (
    <LinearGradient
      colors={['#f58723', '#fbbb0c', '#93a31c']} //colores para el degradez
      style={styles.container}
    >
      <Text style={styles.text}>Texto con GRADIANTE de fondo</Text>
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
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',   
  }
});
