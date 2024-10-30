import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import icon from './assets/LOG_AMBIENTE.png';

export default function App() {
  return (
    <LinearGradient
      colors={['#004e92', '#fdbb2d', '#004e92']}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image source={icon} style={{
          width: 200,
          height: 200
        }}></Image>
        <Text style={styles.mainText}>Municipalidad de Quinchao</Text>
        <Text style={styles.subText}>Departamento de Medioambiente</Text>
        <StatusBar style="auto" />

        <View style={{ marginVertical: 5 }}>
          <Button
            title="PULSA AQUÍ"
            color="#39b54a"
            onPress={() => Alert.alert('¡Alerta!', 'Este es un mensaje con button')}
            />
        </View>

        <View style={{ marginVertical: 5 }}>    
          <TouchableHighlight
            onPress={() => Alert.alert('¡Alerta!', 'Aguante touchable')}
            underlayColor='#cce7cc'
            style={{ padding: 10, backgroundColor: '#19cc98', borderRadius: 8 }}
          >
            <Text style={{ color: '#fff'}}>Presiona Aquí</Text>
          </TouchableHighlight>
        </View>

        <View style={{ marginVertical: 5 }}> 
          <Pressable 
            onPress={() => Alert.alert('¡Alerta!', 'Botón con icono de Google')}
            style={({ pressed }) => [
            styles.pressableButton,
            { backgroundColor: pressed ? '#cce7cc' : '#39b54a' }
          ]}
        >
            <View style={styles.iconTextContainer}>
             <Icon name="google" size={20} color="#fff" style={{ marginRight: 8 }} />
              <Text style={styles.buttonText}>Presione Aquí</Text>
            </View>
          </Pressable>
        </View>
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
  mainText: { 
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  subText: { 
    fontSize: 13,
    fontWeight: '400',
    color: 'green',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  touchableButton: {
    padding: 10,
    backgroundColor: '#19cc98',
    borderRadius: 8,
  },
  pressableButton: {
    padding: 10,
    borderRadius: 5,
  },
  iconTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
  },
});

