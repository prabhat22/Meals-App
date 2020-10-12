import  React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {useSelector} from 'react-redux';

export default function FavouritesScreen(props)
{
  const favMeals=useSelector(state=>state.meal.fav)
  if(favMeals.length === 0)
  {
    return(
      <View style={styles.screen}>
        <Text>
          No favourite meal. Please add some 
        </Text>
      </View>
    )
  }

  return(
   <MealList mealData={favMeals} navigation={props.navigation} />
  )
}
FavouritesScreen.navigationOptions=(data)=>
{
  return {headerTitle:'Favorites',
}
}
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