import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#f58723', '#fbbb0c', '#0b110d']} // Colores del gradiente
      style={styles.container}
    >
      <Text style={styles.text}>¡Texto con gradiente de fondo!</Text>
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
    fontWeight: '600', // Semi-negrita
    color: 'green',    // Color verde
  }
});
