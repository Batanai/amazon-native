import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from './QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {item, quantity: quantityProp} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
              />
            ))}

            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from R{item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>R{item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  star: {
    margin: 2,
  },
  quantityContainer: {
    marginVertical: 10,
  },
});
