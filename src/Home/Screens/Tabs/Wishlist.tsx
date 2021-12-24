import * as React from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import {
  Routes,
  StackNavigationProps,
} from "../../../../components/navigation";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from "react-native-elements";
import { auth } from "../../../../firebase";
import { useEffect } from "react";

interface WishlistProps {}

const Wishlist = ({ navigation }: StackNavigationProps<Routes, "Wishlist">) => {
  return (
    <View
      style={{
        backgroundColor: "#efece7",
        height: "100%",
        width: "100%",
        padding: 25,
      }}
    ></View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  screen: {
    marginTop: 25,
  },
  heading: {
    fontSize: 24,
    color: "#000",
    paddingTop: 25,
    fontWeight: "bold",
  },
  form: {
    flexDirection: "row",
    height: 58,
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#efece7",
    marginTop: 20,
    //overflow: "hidden",
    borderBottomColor: "#000",
    //backgroundColor: "red",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#2c393f",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
    backgroundColor: "#2c393f",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
