// INTEGRANTES: Juan Paillan, Jorge Ruiz
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopArtistsScreen from './screens/TopArtistsScreen'; //apunta a TopArtistsScreen
import ArtistDetailScreen from './screens/ArtistDetailScreen'; //apunta a ArtistDetailScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopArtists">
        <Stack.Screen 
          name="TopArtists" 
          component={TopArtistsScreen} 
          options={{ title: 'Top Artistas Chilenos' }}
        />
        <Stack.Screen 
          name="ArtistDetail" 
          component={ArtistDetailScreen} 
          options={{ title: 'Información del Artista' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
