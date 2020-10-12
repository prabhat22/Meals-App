import  React, { useState } from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import {Categories} from '../data/dummy-data';
import Colors from '../Constants/Colors';

import MealList from '../components/MealList'
import {useSelector} from 'react-redux';

export default function ItemsScreen(props)
{
  const catId=props.navigation.getParam('categoryId');
    const availableMeals=useSelector(state=>state.meal.filterMeals)
  const mealData=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0)

     if(availableMeals.length === 0)
     {
      return(
        <View style={styles.screen}>
          <Text>
            No meal found. Please check your filters 
          </Text>
        </View>
      )
     }
  return(
   <MealList mealData={mealData} navigation={props.navigation} />
  )
}
ItemsScreen.navigationOptions=(data)=>
{
  const catId=data.navigation.getParam('categoryId')
  const selCategory=Categories.find(cat=>cat.key===catId);
 return {
  headerTitle:selCategory.title
 };
};
const styles = StyleSheet.create(
  {
    screen:
    {
      flex: 1,
      alignItems: "center",
      justifyContent:'center'
    }
  }
)
