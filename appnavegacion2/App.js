import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; //se agrega la importacion de imagenes
import { LinearGradient } from 'expo-linear-gradient'; //se importa el lineargradient
import Icon from 'react-native-vector-icons/FontAwesome'; //se importa el componente de iconos

export default function App() {
  return (
    //fondo degradado con lineargradient
    <LinearGradient colors={['#d2232b', '#7d222a', '#0a0c0d']} style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <Image
          //imagen de la cancion
          source={{ uri: 'https://images.genius.com/e5cfbe8cfba6296b28ab86576df41f99.1000x1000x1.png' }} 
          style={styles.albumCover}
        />
        <View style={styles.textContainer}> 
          <Text style={styles.MainText}>Vea Pues</Text> 
          <Text style={styles.SubText}>Easykid</Text>
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
    elevation: 5, 
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  MainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  SubText: {
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

