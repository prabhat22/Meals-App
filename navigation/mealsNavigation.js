import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation'
import Colors from '../Constants/Colors';

import CategoryScreen from '../screens/CategoryScreen';
import ItemsScreen from '../screens/ItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FilterScreen';
import { Ionicons } from '@expo/vector-icons';
const mealsNavigator = createStackNavigator(
    {
        startScreen: CategoryScreen,
        ItemsScreen: ItemsScreen,
        ItemDetailScreen: ItemDetailScreen
    },
    {
        defaultNavigationOptions:
        {
            headerStyle:
            {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white',
            headerTitleStyle:
            {
                fontFamily:'open-sans-bold'
            },
            headerBackTitleStyle:
            {
                fontFamily:'open-sans'
            }
        }
    }
)
const favNavigator=createStackNavigator(
    {
        Favorites: {
            screen: FavouritesScreen,
        },
        ItemDetailScreen: ItemDetailScreen

    },
    {
        defaultNavigationOptions:
        {
            headerStyle:
            {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
)
const tabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: mealsNavigator, navigationOptions:
            {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
                },
                labelStyle:
                {
                    fontFamily:'open-sans-bold'
                }

            }
        },
        Favorites: {
            screen: favNavigator,
            navigationOptions:
            {
                tabBarIcon: (tabInfo) => { return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} /> }
            }
        }
    },
    {
        tabBarOptions:
        {
            activeTintColor: Colors.accentColor

        }
    })

   const filterNavigator=createStackNavigator(
       {
           FilterScreen:FilterScreen
       },
       {
        defaultNavigationOptions:
        {
            headerStyle:
            {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
   ) 
    const menuDrawer=createDrawerNavigator(
        {
            Favourites:{
                screen: tabNavigator,
                navigationOptions: {
                  drawerLabel: 'Meals'
                }
              },
            Filter:filterNavigator
        },
        {
            contentOptions:
        {
          activeTintColor:Colors.accentColor,
          labelStyle:
          {
              fontFamily:'open-sans-bold'
          }
        }
    }
    )
export default createAppContainer(menuDrawer)