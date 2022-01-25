import * as React from "react";
import { View, StyleSheet } from "react-native";
import CartItmeList from "../../Components/CartItemList";
import CartTotal from "../../Components/CartTotal";

const Cart = () => {
  return (
    <View style={styles.container}>
      <CartItmeList />
      <CartTotal />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
});
