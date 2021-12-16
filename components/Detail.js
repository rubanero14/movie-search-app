import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {useState,useEffect} from 'react';
import Item from './Item';

export default function Detail({navigation}) {

const [imdbID, setImdbID] = useState('');
const [movie, setMovie] = useState(null);

const renderItem = ({ item }) => (
    <Item title={item.Title} year={item.Plot} imageurl={item.Poster}/>
  );

useEffect(()=> {
    fetch(`http://www.omdbapi.com/?i=${navigation.getParam('imdbID')}&apikey=87d10179`)
    .then(response => response.json())
    .then(data => setMovie(data));
})

  return (
    <View style={styles.container}>
      {
        movie ?
        <View>
          <Image style={styles.image} source={{
                uri: movie.Poster,
            }}/>
          <Text style={styles.text}>{movie.Title}</Text>
          <Text style={styles.text}>{movie.Year}</Text>
          <Text style={styles.text}>{movie.Released}</Text>
          <Text style={styles.text}>{movie.Director}</Text>
          <Text style={styles.text}>{movie.Actors}</Text>
          <Text style={styles.text}>{movie.Plot}</Text>
          <StatusBar style="auto" />
        </View>
        :
        <View>
          <Text>Loading...</Text>
        </View> 
    }  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 26,
    color: 'black'
  },
  image: {
    width: 100,
    height: 150,  
  }
});
