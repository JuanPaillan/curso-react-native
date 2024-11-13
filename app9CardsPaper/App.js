import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Linking, Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; //se importa LinearGradient
import { Card, Title, Paragraph, Button } from 'react-native-paper'; //se importa componentes de React Native Paper
import Icon from 'react-native-vector-icons/Ionicons'; //se importa icon de react-native-vector-icons

export default function App() {
  return (
    <LinearGradient
      colors={['#fb5c90', '#0e0b29', '#08643d']} //colores para el degradado
      style={styles.container}
    >
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Card 1 */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.header}>
              <Icon
                name="musical-notes-sharp"
                size={30}
                color="#ffffff" //color blanco para el icono
                style={styles.icon}
              />
              <View>
                <Title style={styles.title}>Artista N°1</Title>
                <Paragraph style={styles.subtitle}>Género Músical: Reggaetón y Trap</Paragraph>
              </View>
            </View>
            <Text style={styles.artistName}>DrefQuila</Text>
            <Paragraph style={styles.description}>
              Conocido por su estilo único y letras auténticas que han ganado popularidad en Latinoamérica.
            </Paragraph>
            <Image
              source={{ uri: 'https://www.larata.cl/wp-content/uploads/2024/07/drefquila-teatro-caupolican.jpg' }}
              style={styles.image}
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              mode="contained"
              onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/5pughe5rcsOq3GF0utMOs5')}
            >
              Spotify
            </Button>
            <Button
              mode="contained"
              onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/DrefQuila')}
            >
              Más Info
            </Button>
          </Card.Actions>
        </Card>

        {/* Card 2 */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.header}>
              <Icon
                name="musical-notes-sharp"
                size={30}
                color="#ffffff" //color blanco para el icono
                style={styles.icon}
              />
              <View>
                <Title style={styles.title}>Artista N°2</Title>
                <Paragraph style={styles.subtitle}>Género Músical: Reggaetón y Trap</Paragraph>
              </View>
            </View>
            <Text style={styles.artistName}>Harry Nach</Text>
            <Paragraph style={styles.description}>
              Destacado por su estilo fresco y su habilidad para mezclar géneros urbanos con toques personales en sus letras.
            </Paragraph>
            <Image
              source={{ uri: 'https://cdn.wegow.com/media/artists/harry-nach/harry-nach-1689699402.6875799.jpg' }}
              style={styles.image}
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              mode="contained"
              onPress={() => Linking.openURL('https://open.spotify.com/intl-es/artist/0NnUMWDCDi1snuMja6IdxH')}
            >
              Spotify
            </Button>
            <Button
              mode="contained"
              onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Harry_Nach')}
            >
              Más Info
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  scrollView: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 350,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    backgroundColor: '#634ca2', // Fondo morado para el icono
    borderRadius: 20, // Hace que el icono sea circular
    padding: 5, // Añade espacio dentro del círculo
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4,
    marginLeft: 0, 
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'cover',
  },
  cardActions: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
