import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,  TouchableOpacity } from 'react-native';

export default function CategoryGridTitle(props)
{
return(
    <TouchableOpacity  
    style={{backgroundColor:props.color,...styles.listItem}} 
    onPress={props.onSelect}
    >
      <View><Text style={styles.title}>{props.title}</Text></View>
    </TouchableOpacity>

)
}
const styles = StyleSheet.create(
    {
      listItem:
      {
       flex:1,
        margin: 15,
        height: 150,
        borderRadius:10,
      justifyContent:'flex-end',
      alignItems:'flex-end',
      elevation:3,
      overflow:'hidden',
      padding:15

      },
      title:
      {
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'right'
      }
    }
  )