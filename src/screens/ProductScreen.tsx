import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import product from '../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import {useRoute} from '@react-navigation/native';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(
    product.options ? product.options[0] : null,
  );

  const route = useRoute();

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{product.title}</Text>

      {/* image carousel */}
      <ImageCarousel images={product.images} />

      {/* option selector */}
      <Picker
        selectedValue={selectedItem}
        onValueChange={itemValue => setSelectedItem(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* price */}
      <Text style={styles.price}>
        from R{product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>R{product.oldPrice}</Text>
        )}
      </Text>
      {/* description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* buttons */}
      <Button
        text={'Add to Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('buy nw ');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {},
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
