import  React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/mealsNavigation';
import {enableScreens} from 'react-native-screens';
import {createStore,combineReducers} from 'redux';

import mealReducer from './store/reducers/meal';
import {Provider} from 'react-redux';

 enableScreens();
 
 const rootReducer=combineReducers(
   {
     meal:mealReducer
   }
 )
 
 const store=createStore(rootReducer)
function fetchFont()
{
 return Font.loadAsync(
    (
      {
        'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf')
      }
    )
  )
}
export default function App()
{
  
  const [isFontLoaded,setFontLoaded]=useState(false);
  if(!isFontLoaded)
  {
    return(
      <AppLoading startAsync={fetchFont} onFinish={()=>setFontLoaded(true)} />
    )
  }
  return <Provider store={store}><MealsNavigator /></Provider>
  
}
const styles=StyleSheet.create(
  {
    screen:
    {
      marginVertical:100,
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }
  }
)