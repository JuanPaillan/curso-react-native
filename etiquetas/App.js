import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import icon from './assets/LOG_AMBIENTE.png'; // Imagen local de logotipo
import HomeScreen from './HomeScreen'; //componente pantalla home

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) { //pantalla principal
  return (
    <LinearGradient colors={['#f58723', '#fbbb0c', '#0b110d']} style={styles.container}>
      <View style={styles.container}>
        <Image source={icon} style={{ width: 250, height: 250 }} /> 
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
          <TouchableHighlight //TouchableHighlight con alerta al hacer click
            onPress={() => Alert.alert('¡Alerta!', 'Aguante touchable')}
            underlayColor='#cce7cc'
            style={{ padding: 9, backgroundColor: '#19cc98', borderRadius: 7 }}
          >
            <Text style={{ color: '#fff' }}>Presiona Aquí</Text>
          </TouchableHighlight>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Pressable //Pressable con alerta al hacer click
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

        <View style={{ marginVertical: 15 }}> 
          <Pressable //boton de navegacion para el home
            onPress={() => navigation.navigate('Home')}
            style={({ pressed }) => [
              styles.pressableButton,
              { backgroundColor: pressed ? '#cce7cc' : '#39b54a' }
            ]}
          >
            <View style={styles.iconTextContainer}>
              <Icon name="user" size={20} color="#fff" style={{ marginRight: 5 }} />
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </Pressable>
        </View>

        <Image //imagen desde url de internet del icono de google
          source={{ uri: 'https://m.fastbase.com/frontpage/assets/images/google-signin-btn.png' }}
          style={styles.googleLogo}
        />
      </View>
    </LinearGradient>
  );
}

//pantallas principal y home
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 22,
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
    fontWeight: '500',
  },
  pressableButton: {
    padding: 10,
    borderRadius: 5,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleLogo: {
    width: 190,
    height: 40,
    marginTop: 20,
  },
});





