import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import Counter from "react-native-counters";

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
          <Text style={styles.Item}>{itemname}</Text>
          <Counter
            start={1}
            buttonStyle={{ borderColor: "black" }}
            buttonTextStyle={{ color: "black" }}
            countTextStyle={{ color: "black" }}
          />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{itemprice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",

    paddingBottom: 20,
    borderWidth: 1,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "gray",
  },
  logo: {
    margin: 20,
    marginTop: 40,

    width: 66,
    height: 58,
  },
  price: {
    color: "black",
    marginTop: 33,
    fontSize: 20,
  },
  priceContainer: {
    marginLeft: 70,
  },
  Item: {
    margin: 10,
    color: "black",
    marginLeft: -5,
    fontSize: 20,
  },
  ItemContainer: {
    flexDirection: "row",
    marginTop: 22,
  },
});
