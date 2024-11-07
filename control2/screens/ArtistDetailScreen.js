import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ArtistDetailScreen({ route }) {
  const { artista } = route.params;

  return ( // referencia a cada artista con su imagen y descripción
    <View style={styles.container}>
      <Image source={{ uri: artista.image }} style={styles.artistaImagen} />
      <Text style={styles.artistaNombre}>{artista.nombre}</Text>
      <Text style={styles.description}>{artista.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  artistaImagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  artistaNombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
