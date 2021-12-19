import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Categories from '../SearchComponents/CategoriesM';
import ShoppingModal from '../SearchComponents/ShoppingModal';

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>CART</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
