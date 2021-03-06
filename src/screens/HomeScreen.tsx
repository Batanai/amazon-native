import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
