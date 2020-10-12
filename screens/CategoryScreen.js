import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Categories } from '../data/dummy-data';
import Colors from '../Constants/Colors';
import ItemsScreen from './ItemsScreen';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

export default function CategoryScreen(props) {

  function renderList(itemData) {
    return (
      <CategoryGridTitle 
       title={itemData.item.title}
       color={itemData.item.color}
        onSelect={()=>{props.navigation.navigate({routeName:'ItemsScreen',params:{categoryId:itemData.item.key
      }})
      }}
      />

    )
  }
  return (

    <FlatList data={Categories} numColumns={2} renderItem={renderList} />

  )
}
CategoryScreen.navigationOptions=(navigationData)=>
{
  console.log(navigationData);
  return {headerTitle:'Meal Categories',
    headerLeft:(
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    )
}
    
  
}
const styles = StyleSheet.create(
  {
    screen:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",

    },
    listItem:
    {

      margin: 15,
      height: 150
    }
  }
)