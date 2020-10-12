import React, { useState,useCallback,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Colors from '../Constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { useDispatch } from 'react-redux';
import  {filter_meal} from '../store/actions/meal'

export default function FilterScreen(props) {
  const [isGlutenFree, setGlutenValue] = useState(false);
  const [isVegan, setVeganValue] = useState(false);
  const [isLactoseFree, setLactoseValue] = useState(false);
  const [isVeg, setVegValue] = useState(false);
  const dispatch=useDispatch();

  const {navigation}=props
  const saveFilter=useCallback(()=>
  {
    const filterData={
      isGlutenFree:isGlutenFree,
      isVegan:isVegan,
      isLactoseFree:isLactoseFree,
      isVeg:isVeg
    }
    console.log(filterData)
    dispatch(filter_meal(filterData));
  },
  [isGlutenFree,isLactoseFree,isVeg,isVegan]);


  const FilterComp = (props) => {
    return (
      <View style={styles.filters}>
        <Text>{props.label}</Text>
        <Switch
          value={props.value}
          onValueChange={props.setValue}


        />

      </View>
    )
  }
  useEffect(()=>
  {
    navigation.setParams({filters:saveFilter})
  },[saveFilter])
  return (
    <View style={styles.screen}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
      </View>
      <View>
        <FilterComp value={isGlutenFree} label="Gluten-Free" setValue={(value) => setGlutenValue(value)} />
        <FilterComp value={isVegan} label="Vegan" setValue={(value) => setVeganValue(value)} />
        <FilterComp value={isLactoseFree} label="Lactose-Free" setValue={(value) => setLactoseValue(value)} />
        <FilterComp value={isVeg} label="Vegearian" setValue={(value) => setVegValue(value)} />
      </View>

    </View>
  )
}
FilterScreen.navigationOptions=(navigationData)=>
{
  console.log(navigationData);
  return {headerTitle:'Filter Meals',
    headerLeft:(
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
    headerRight:(
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam('filters')} />
      </HeaderButtons>
    ),
}
    
  
}
const styles = StyleSheet.create(
  {
    screen:
    {
      flex: 1,

    },
    title:
    {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'center'
    },
    filters:
    {
      paddingHorizontal:10,
      marginVertical: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%'
    }
  }
)