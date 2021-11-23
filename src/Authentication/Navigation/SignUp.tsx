import * as React from "react";
import { Text, View, StyleSheet, Pressable,TextInput } from "react-native";
import { Routes, StackNavigationProps } from "./navigation";
import { Feather as Icon } from "@expo/vector-icons";

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
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
          <Text style={styles.heading}>New Customer</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.textInp}
            placeholder="First Name"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textInp}
            placeholder="Last Name"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textInp}
            placeholder="Email"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textInp}
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInp}
            placeholder="Address"
            autoCompleteType="email"
          />
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginBottom: 60,
            }}
          >
            <TextInput
              style={[styles.textInpSec, { marginLeft: -28 }]}
              placeholder="State"
              autoCompleteType="email"
            />
            <TextInput
              style={[styles.textInpSec, { marginRight: -28 }]}
              placeholder="Post-Code"
              autoCompleteType="email"
            />
          </View>
          <TextInput
            style={[
              styles.textInp,
              {
                marginBottom: 25,
              },
            ]}
            placeholder="Country"
            autoCompleteType="email"
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "red" : "blue",
              },
              styles.button,
            ]}
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efece7",
    ...StyleSheet.absoluteFillObject,
    // justifyContent: "flex-start",
  },
  screen: {
    // margin: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    color: "#000",
    paddingTop: 20,
    fontWeight: "bold",
    // padding: 20,
  },
  form: {
    // margin: 20,
    marginTop: 20,
  },
  textInp: {
    overflow: "hidden",
    marginBottom: 15,
    flexDirection: "column",
    height: 50,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderColor: "#efece7",
    alignContent: "center",
  },
  textInpSec: {
    overflow: "hidden",
    height: 50,
    width: "45%",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderColor: "#efece7",
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
     bottom: 0,
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
