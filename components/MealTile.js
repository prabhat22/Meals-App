import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

export default function CategoryGridTitle(props) {
    return (
        <TouchableOpacity
            style={{ ...styles.listItem }}
            onPress={props.onSelect}
        >
            <View  style={{ ...styles.mealRow, ...styles.title }}>
                <ImageBackground source={{ uri: props.data.imageUrl }} style={styles.image}>
                    <Text style={styles.text}>{props.data.title}</Text>
                </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.detail }}>
                <Text >{props.data.duration}min</Text>
                <Text >{props.data.complexity}</Text>
                <Text >{props.data.affordability}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create(
    {
        listItem:
        {
            flex: 1,
            height: 200,
            backgroundColor: 'grey',
            width: '100%',
            marginVertical:10

        },
        mealRow: {
            flexDirection: 'row'
        },
        image:
        {
            width: '100%',
            height: '100%',
            justifyContent:'flex-end'


        },
        title:
        { 
            height: '85%'
        },
        text:
        {
            fontFamily: 'open-sans-bold',
            fontSize: 20,
            backgroundColor:'rgba(0,0,0,0.5)',
            color:'white'
        },
        detail:
        {
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            height:'15%'
        }
    }
)