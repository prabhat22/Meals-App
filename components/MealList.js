import  React, { useState } from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import MealTile from './MealTile';
export default function MealList(props)
{
    function displayMeal(itemData)
  {
    console.log(itemData)
    return <MealTile data={itemData.item} onSelect={()=>
    {
      props.navigation.navigate({routeName:'ItemDetailScreen',params:{
        mealId:itemData.item.key,
        mealTitle:itemData.item.title
      }})
    }} />
  
   
  }
    return(
        <View style={styles.screen}>
        <FlatList style={styles.list} data={props.mealData} renderItem={displayMeal} />
      </View>
    )
}
const styles=StyleSheet.create(
    {
      screen:
      {
        flex:1,
      
        flexDirection:'row'
      },
      list:
      {
        width:'100%'
      }
    }
  )