import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import Counter from "react-native-counters";
import CounterInput from "react-native-counter-input";
import NumericInput from "react-native-numeric-input";

interface CartItemProps {
  itemname;
  itemprice;
  itemimage;
}

const CartItem = ({ itemname, itemprice, itemimage }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: itemimage,
        }}
      />
      <View style={styles.ItemContainer}>
        <View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.Item}>
              {itemname}
            </Text>
          </View>

          <Text style={styles.price}>{itemprice}</Text>
        </View>

        <View style={styles.CounterContainer}>
          <NumericInput
            onChange={(value) => console.log(value)}
            totalHeight={40}
            totalWidth={100}
            rounded
            borderColor={"transparent"}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",
    backgroundColor: "#F5F5F5",
    paddingBottom: 20,

    borderRadius: 15,
  },
  logo: {
    margin: 10,
    width: 66,
    height: 58,
  },
  price: {
    color: "#616161",
    marginTop: 5,
    fontSize: 15,
  },
  CounterContainer: {
    marginLeft: 0,
    marginTop: 20,
    marginRight: 10,
    position: "absolute",
    right: 0,
  },
  Item: {
    color: "#3D3D3D",

    marginTop: 7,
    fontSize: 20,
    fontWeight: "bold",
  },
  ItemContainer: {
    flexDirection: "row",

    flex: 1,
  },
  counter: {
    height: 5,
    width: 6,
  },
  textContainer: {
    width: 145,
    overflow: "hidden",
  },
});
