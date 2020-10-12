import  React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

export default function CustomHeaderButton(props)
{

    return(
        <HeaderButton  {...props} IconComponent={Ionicons} iconSize={20} color="white">

        </HeaderButton>
    )
}