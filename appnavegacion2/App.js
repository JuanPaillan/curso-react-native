import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; //se agrega la importacion de imagenes
import { LinearGradient } from 'expo-linear-gradient'; //se importa el lineargradient
import Icon from 'react-native-vector-icons/FontAwesome'; //se importa el componente de iconos

export default function App() {

  const [Isliked, Setisliked] = useState(false);
  const toggleheart = () => {
    Setisliked(!Isliked);
  };
  return (
    //fondo degradado con lineargradient 
    <LinearGradient colors={['#d2232b', '#7d222a', '#0a0c0d']} style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <View style={styles.shadowContainer}>
          <Image //imagen de la portada
          source={{ uri: 'https://images.genius.com/e5cfbe8cfba6296b28ab86576df41f99.1000x1000x1.png' }} 
          style={styles.albumCover}
          />
        </View>
        <View style={styles.textContainer}> 
          <Text style={styles.MainText}>Vea Pues</Text> 
          <Text style={styles.SubText}>Easykid</Text>
        </View> 
      </View>
      
      <TouchableOpacity onPress={toggleheart} style={styles.iconContainer}>
        <Icon
          name="heart"
          size={30}
          color={Isliked ? "red" : "#fff"} //cambia de color segun el estado
          style={styles.icon}
        />
      </TouchableOpacity>
      
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
  shadowContainer: {
    width: 250,
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumCover: {
    width: 240,
    height: 240,
    borderRadius: 15,
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

