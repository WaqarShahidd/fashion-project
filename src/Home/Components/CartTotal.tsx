import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface CartTotalProps {}

const CartTotal = (props: CartTotalProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.Subtext}>Subtotal</Text>
          <Text style={styles.Subprice}>Rs. 400.00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.Deliverytext}>Delivery fee</Text>
          <Text style={styles.Deliveryprice}>Rs. 60.00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.Totaltext}>Total (incl. VAT)</Text>
          <Text style={styles.Totalprice}>Rs. 460.00</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#44585F" : "#2c393f",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Continue shopping</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#44585F" : "#2c393f",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Proceed to checkout</Text>
      </Pressable>
    </View>
  );
};

export default CartTotal;

const styles = StyleSheet.create({
  container: { marginLeft: 15, marginRight: 15 },
  textContainer: {
    flexDirection: "row",
  },
  Subtext: {
    fontSize: 22,
    margin: 0,
    textAlign: "right",
  },
  Subprice: {
    fontSize: 22,
    margin: 0,
    position: "absolute",
    right: 0,
  },
  Deliverytext: {
    fontSize: 15,
    margin: 0,
    textAlign: "right",
  },
  Deliveryprice: {
    fontSize: 15,
    margin: 0,
    position: "absolute",
    right: 0,
  },
  Totaltext: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
    textAlign: "right",
  },
  Totalprice: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
    position: "absolute",
    right: 0,
  },
  button: {
    height: 50,
    width: "100%",
    // backgroundColor: "#2c393f",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderWidth: 1.5,
    borderColor: "#2c393f",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
