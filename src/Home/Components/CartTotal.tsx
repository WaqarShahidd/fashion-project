import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface CartTotalProps {}

const CartTotal = (props: CartTotalProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          paddingBottom: 15,
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.price}>Rs. 400.00</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Delivery fee</Text>
          <Text style={styles.price}>Rs. 60.00</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Totaltext}>Total (incl. VAT)</Text>
        <Text style={styles.Totalprice}>Rs. 460.00</Text>
      </View>

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
  container: {
    backgroundColor: "white",
    padding: 25,

    borderRadius: 30,
    height: "40%",
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    marginBottom: 4,
    color: "#3D3D3D",
  },
  price: {
    fontSize: 18,
    marginBottom: 4,
    position: "absolute",
    right: 0,
    color: "#3D3D3D",
  },

  Totaltext: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 18,
    textAlign: "right",
    color: "#3D3D3D",
  },
  Totalprice: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 18,
    position: "absolute",
    right: 0,
    color: "#3D3D3D",
  },
  button: {
    height: 50,
    width: "100%",
    position: "absolute",

    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: "35%",
    left: "7%",
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
