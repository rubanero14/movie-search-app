import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Item({title, year, imageurl}){
    return (
        <View style={styles.item}>
            <Image style={styles.tinyLogo}
            source={{
                uri: imageurl,
            }}>

            </Image>
            <View style={styles.item2}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
    },
    item2: {
      padding:20,
    },
    title: {
      fontSize: 32,
    },
    year: {
        fontSize: 26,
      },
      tinyLogo: {
        width: 100,
        height: 150,
      }
  });