import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Routes, StackNavigationProps } from "./navigation";

const ResetPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ResetPassword">) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={styles.screen}>
          <Icon
            name="arrow-left"
            size={30}
            color="#000"
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          />
          <Text style={styles.heading}>Forgot Password?</Text>
          <Text style={{ paddingTop: 15, fontWeight: "100" }}>
            Enter your email to recieve the instructions to reset your password
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput placeholder="Your email" autoCompleteType="email" />
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "red" : "blue",
              },
              styles.button,
            ]}
            onPress={() => Alert.alert("", "Code Sent")}
          >
            <Text style={styles.buttonText}>Send Code</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efece7",
    ...StyleSheet.absoluteFillObject,
  },
  screen: {
    marginTop: 25,
  },
  heading: {
    fontSize: 30,
    color: "#000",
    paddingTop: 25,
    fontWeight: "bold",
  },
  form: {
    marginTop: 20,
    overflow: "hidden",
    marginBottom: 35,
    flexDirection: "row",
    height: 58,
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderColor: "#efece7",
    alignContent: "center",
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#b5bfc0",
  },
});
