import * as React from "react";

import { Text, View, StyleSheet, Dimensions } from "react-native";

const winHeight = Dimensions.get("window").height;

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: winHeight * 0.1,
          justifyContent: "center",
          backgroundColor: "white",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,

            textAlign: "center",

            fontFamily: "PlayfairDisplay_700Bold",
          }}
        >
          Wishlist
        </Text>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
});
