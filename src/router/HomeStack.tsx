import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={() => setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="Home" options={{title: 'Home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        component={ProductScreen}
        name="Details"
        options={{title: 'Product Details'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
