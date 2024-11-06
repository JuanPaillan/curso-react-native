import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TopArtistsScreen({ navigation }) {
  const showAlert = (message) => {
    Alert.alert("", message, [{text: "Cancelar"}, { text: "OK" }]); //botones de cancelar y ok
  };

  const artistas = [ //array de artistas
    { 
      id: 1, 
      nombre: 'Cris MJ', 
      image: 'https://www.corazon.cl/wp-content/uploads/2022/03/Cris-MJ.jpg', 
      description: 'Nació en La Serena, Chile el 16 de septiembre de 2001.​ Comenzó en la música en el año 2019, y a partir del año 2020, lanzó varios sencillos y colaboraciones con otros exponentes de la música urbana chilena y latinoamericana. En 2021, anunció su álbum de estudio, además lanzó canciones como «Locura y maldad», «De ti soy adicto», «Te fuiste con otro», y «Los malvekes» en colaboración de Marcianeke y Simón la Letra, siendo ésta su primera canción en alcanzar más de 100 millones de reproducciones en Spotify.' 
    },
    { 
      id: 2, 
      nombre: 'Easykid', 
      image: 'https://assets.diarioconcepcion.cl/2024/05/Easykid-e1715206558760.jpg', 
      description: 'Nacido en Antofagasta, Easykid se interesó por la música viendo videos musicales en MTV, en especial de Green Day y Blink-182. Influenciado por dichas bandas, comenzó a tocar una guitarra clásica que había en su casa. Consciente de este interés, su abuelo le regaló una guitarra eléctrica y varios cedés que Easykid pedía para cumpleaños y navidades, los cuales escuchaban juntos en trayectos en auto. Al crecer, el cantante se interesó por el rap y publicó sus primeras canciones de SoundCloud.' 
    },
    { 
      id: 3, 
      nombre: 'Movimiento Original', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVxvjSj-DYVUB8mkHwS7Q6VaEcd7GtPFHLg&s', 
      description: 'Formado el grupo en Pudahuel, Santiago de Chile.​ En 2005 grabaron un demo de 5 temas, que se convertiría en 2008 en su primer disco Soldados del Ghetto.​ En 2010 grabaron una remasterización llamada Edición Especial, para 2012 producen el trabajo Teorema, en 2015 Mc Piri se separa del grupo y en 2017 lanzan Mov Rap and Reggae.​ Ganadores de 3 estatuillas del Premio Pulsar en 2018.​ Se han presentado en varios festivales de Chile​ y a nivel internacional.​ En 2019 realizaron la canción Despierto como parte de las protestas en Chile de 2019. Sus miembros también realizan trabajos individuales como Aerstame con Desde la periferia al mundoi, Acerijos, Aéreo 27 y Contraforma Stailok con Inmortal Come Back​' 
    },
    { 
      id: 4, 
      nombre: 'Chystemc', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvV-46hFD0B_oqr3X9tBqRW8og4mZ5-T2Mw&s', 
      description: 'Diego Torres Rojas, mejor conocido como Chystemc a.k.a Chyste, Psycho Joke Fú, Techy o Sun Joke es un Mc, freestyler, compositor y productor musical originario del Barrio 19, procedente de La Florida, Chile.' 
    },
    { 
      id: 5, 
      nombre: 'Facebrooklyn', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJunMO-cy4wFtqtrmzGOAplpkGhFuI9FO9zA&s', 
      description: 'Felipe Etcheverry es conocido artísticamente como Facebrooklyn. Es el autor del disco que acaba de sonar y en resumidas cuentas la razón por la cual se congregó un centenar de personas además de medios y marcas en lo que se conoce como una “listening party”, que es un evento semi privado donde un artista lanza oficialmente su nuevo trabajo pero sin hacer un show en vivo.' 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 Artistas Chilenos</Text>
      
      {/* Muestra los artistas en una cuadrícula */}
      <View style={styles.grid}>
        {artistas.map((artista, index) => (
          <TouchableHighlight
            key={artista.id}
            style={[styles.artistContainer, index === 0 ? styles.topArtist : styles.gridArtist]}
            onPress={() => navigation.navigate('ArtistDetail', { artista })}
          >
            <Image source={{ uri: artista.image }} style={styles.artistImage} />
          </TouchableHighlight>
        ))}
      </View>

        {/* Botones y texto de los artistas */}
      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.button} onPress={() => showAlert("Agregado a tu 'Playlist'")}>
          <Icon name="music" size={20} color="white" />
          <Text style={styles.buttonText}>Agregar a Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => showAlert("Agregado a la lista de 'Favoritos'")}>
          <Icon name="heart" size={20} color="white" />
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  artistContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  topArtist: {
    width: '100%',
    height: 200,
  },
  gridArtist: {
    width: '45%',
    height: 150,
  },
  artistImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});