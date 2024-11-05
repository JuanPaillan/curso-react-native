import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import icon from './assets/LOG_AMBIENTE.png';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) { 
  return (
    <LinearGradient colors={['#f58723', '#fbbb0c', '#0b110d']} style={styles.container}>
      <View style={styles.container}>
        <Image source={icon} style={{ width: 250, height: 250 }} />
        <Text style={styles.mainText}>Municipalidad de Quinchao</Text>
        <Text style={styles.subText}>Departamento de Medioambiente</Text>
        <StatusBar style="auto" />

        <View style={{ marginVertical: 50 }}> 
          <Pressable
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

      </View>
    </LinearGradient>
  );
}

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