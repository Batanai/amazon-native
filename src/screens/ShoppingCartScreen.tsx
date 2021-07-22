import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import CartProductItem from '../components/CartProductItem';
import products from '../data/cart';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const navigation = useNavigation();

  const onCheckout = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Subtotal ({products.length} items) :{' '}
              <Text style={{color: '#e47911'}}>{totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text="Procceed to checkout"
              onPress={onCheckout}
              containerStyles={{backgroundColor: '#eba134'}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
