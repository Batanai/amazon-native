import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const {item} = props;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details', {id: item.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
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
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 5,
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
});
