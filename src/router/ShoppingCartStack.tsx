import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name="Cart"
        options={{title: 'Shopping cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
