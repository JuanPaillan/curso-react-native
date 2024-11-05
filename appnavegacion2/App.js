import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AlbumScreen() {
  return (
    <LinearGradient colors={['#fd190c', '#d6aa26', '#0a0c0d']} style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <Image
          source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/69614595335e77b6600283182a24ea10/0x1900-000000-80-0-0.jpg' }} // Cambia esto por la URL de tu imagen de portada
          style={styles.albumCover}
        />
        <View style={styles.textContainer}>
          <Text style={styles.songTitle}>Tu Perfume A Waren</Text>
          <Text style={styles.artistName}>JB The Voice</Text>
        </View>
      </View>
      
      <View style={styles.iconContainer}>
        <Icon name="heart" size={30} color="#fff" style={styles.icon} />
      </View>
      
      <View style={styles.controlsContainer}>
        <Icon name="backward" size={30} color="#fff" style={styles.controlIcon} />
        <Icon name="play" size={30} color="#fff" style={styles.controlIcon} />
        <Icon name="forward" size={30} color="#fff" style={styles.controlIcon} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  albumCoverContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // Para Android
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  artistName: {
    fontSize: 15,
    color: '#fff',
  },
  iconContainer: {
    marginVertical: 30,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  controlIcon: {
    marginHorizontal: 25,
  },
});

