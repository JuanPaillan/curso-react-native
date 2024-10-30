import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import icon from './assets/LOG_AMBIENTE.png'; //se importa una imagen local desde los archivos del pyoyecto (assets)

export default function App() {
  return (
    <LinearGradient //se aplica un fondo degradado a la pantalla con LinearGradient
      colors={['#f58723', '#fbbb0c', '#0b110d']}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image source={icon} style={{ //se define el tamaño de la imagen importada al principio
          width: 250,
          height: 250 
        }}></Image> 
        <Text style={styles.mainText}>Municipalidad de Quinchao</Text> 
        <Text style={styles.subText}>Departamento de Medioambiente</Text>
        <StatusBar style="auto" /> 

        <View style={{ marginVertical: 5 }}>
          <Button //boton con alerta al hacer click 
            title="Pulsa aquí"
            color="#39b54a"
            onPress={() => Alert.alert('¡Alerta!', 'Este es un mensaje con button')}
            />
        </View>

        <View style={{ marginVertical: 5 }}>    
          <TouchableHighlight // TouchableHighlight: boton con alerta al hacer click
            onPress={() => Alert.alert('¡Alerta!', 'Aguante touchable')}
            underlayColor='#cce7cc'
            style={{ padding: 9, backgroundColor: '#19cc98', borderRadius: 7 }}
          >
            <Text style={{ color: '#fff'}}>Presiona Aquí</Text>
          </TouchableHighlight>
        </View>

        <View style={{ marginVertical: 5 }}> 
          <Pressable //Pressable: boton con alerta al hacer click
            onPress={() => Alert.alert('¡Alerta!', 'Botón con icono de Google')}
            style={({ pressed }) => [
            styles.pressableButton,
            { backgroundColor: pressed ? '#cce7cc' : '#39b54a' }
          ]}
        >
            <View style={styles.iconTextContainer}>
             <Icon name="google" size={20} color="#fff" style={{ marginRight: 5 }} />
              <Text style={styles.buttonText}>Presione Aquí</Text>
            </View>
          </Pressable>
        </View>
      </View>    
    
    </LinearGradient>
  );
}

//se define los estilos de los componentes usados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: { //texto principal "Municipalidad de Quinchao"
    fontSize: 22, //tamaño de texto
    fontWeight: '600', //grosor del texto
    color: 'green', //color del texto
  },
  subText: { //texto secundario "Departamento de Medioambiente"
    fontSize: 13, //tamaño
    fontWeight: '400', //grosor
    color: 'green', //color
  },
  buttonText: { // buttonText del pressable
    color: '#fff', //color
    fontWeight: '500', //grosor
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

