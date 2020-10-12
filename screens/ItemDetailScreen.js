import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
// import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import { toggle_fav } from '../store/actions/meal';

export default function ItemDetailScreen(props) {
  const mealId = props.navigation.getParam('mealId')
  const availableMeals=useSelector(state=>state.meal.meals)
  const favMeals=useSelector(state=>state.meal.fav.some(meal=>meal.key===mealId));

  const mealData = availableMeals.find(meal => meal.key == mealId);

  const dispatch=useDispatch();
  const toggleFavHandler=useCallback(()=>
  {
    dispatch(toggle_fav(mealId));
  },[dispatch,mealId]);

  useEffect(()=>
  {
    props.navigation.setParams({'toggleFav':toggleFavHandler});
  },[toggleFavHandler])
  useEffect(()=>
  {
    props.navigation.setParams({'isFav':favMeals});
  },[favMeals])
  return (
    <ScrollView>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text >{mealData.duration}min</Text>
        <Text >{mealData.complexity}</Text>
        <Text >{mealData.affordability}</Text>
      </View>
      <View>
           <Text  style={styles.title}>Ingredients</Text>
  {mealData.ingredients.map(ing=><Text style={styles.listItem}>{ing}</Text>)}
      </View>
      <View>
           <Text  style={styles.title}>Steps</Text>
           {mealData.steps.map(step=><Text style={styles.listItem}>{step}</Text>)}
      </View>

    </ScrollView>

  )
}
ItemDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
 // const mealData = MEALS.find(meal => meal.key == mealId);
 const favHandler=navigationData.navigation.getParam('toggleFav');
 const isFav=navigationData.navigation.getParam('isFav');
  return {
    headerTitle: navigationData.navigation.getParam('mealTitle'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="favorite"
          iconName={isFav?'ios-star':'ios-star-outline'}
          onPress={ favHandler}/>
      </HeaderButtons>
    )
  }
}
const styles = StyleSheet.create(
  {
    screen:
    {
      flex: 1,
   
      alignItems: "center"
    },
    image:
    {
      width: '100%',
      height: 200
    },
    details:
    { 
      padding:15,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    title:
    {
      fontFamily:'open-sans-bold',
      fontSize:22,
      textAlign:'center'
    },
    listItem:
    {
      marginHorizontal:10,
      borderColor:'grey',
      marginVertical:10,
      padding:10,
      borderWidth:1
    }
  }
)