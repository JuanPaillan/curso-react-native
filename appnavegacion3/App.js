import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'; //iconos
import HomeScreen from './HomeScreen'; //pantalla home
import SettingsScreen from './SettingsScreen'; //pantalla settings

const Stack = createNativeStackNavigator();

//componentes de la pagina principal
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>
      
      <View style={styles.iconContainer}>
        <Pressable
          onPress={() => navigation.navigate('Home')} //navega a la pantalla home al hacer click
          style={({ pressed }) => [
            styles.pressableButton,
            { backgroundColor: pressed ? '#ffebcd' : '#e77e1b' }, //cambio de color al hacer click
          ]}
        >
          <Icon name="home" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Settings')} //navega a la pantalla settings al hacer click
          style={({ pressed }) => [
            styles.pressableButton,
            { backgroundColor: pressed ? '#e0f2f1' : '#008080' }, //cambio de color al hacer click
          ]}
        >
          <Icon name="cog" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

 //componente principal 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  pressableButton: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    marginBottom: 5,
  },
});


