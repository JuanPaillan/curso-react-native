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
    <LinearGradient colors={['#6ca4bc', '#6c99b2', '#0a0c0d']} style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <View style={styles.shadowContainer}>
          <Image //imagen de la portada
          source={{ uri: 'https://static.wixstatic.com/media/e9a402_8604209056154386804caebad08aeadd~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e9a402_8604209056154386804caebad08aeadd~mv2.jpg' }} 
          style={styles.albumCover}
          />
        </View>
        <View style={styles.textContainer}> 
          <Text style={styles.MainText}>KIMYE</Text> 
          <Text style={styles.SubText}>FaceBrooklyn</Text>
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
    marginBottom: 15,
  },
  shadowContainer: {
    width: 250,
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
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
    marginTop: 5,
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
    marginVertical: 35,
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

