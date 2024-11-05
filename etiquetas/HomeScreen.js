import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient //se aplica un fondo degradado a la pantalla con LinearGradient
      colors={['#f58723', '#fbbb0c', '#0b110d']}
      style={styles.container}
    >
      <View style={styles.container}>
         <Text style={styles.welcomeText}>¡Bienvenido al Home!</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});
