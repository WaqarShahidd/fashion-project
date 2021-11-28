import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
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
