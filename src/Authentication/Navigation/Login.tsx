import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Routes, StackNavigationProps } from "./navigation";
import TextInput from "./TextInput";
import { Feather as Icon } from "@expo/vector-icons";
import Checkbox from "./Checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const passwordValidator = (password: string) =>
  /^[A-Za-z]\w{5,11}$/.test(password);

// const Separator = () =>  <View style = {styles.separator} />
const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#efece7" }}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Icon
            name="x"
            size={30}
            color="#000"
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          />
          <Text style={styles.heading}>Existing Customer</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />

          <TextInput
            icon="lock"
            placeholder="Enter your password"
            validator={passwordValidator}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // margin: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Checkbox />
            <Text>Remember Me</Text>
            <TouchableOpacity
              style={{ backgroundColor: "transparent" }}
              onPress={() => true}
            ></TouchableOpacity>
          </View>
          <Text style={{ color: "#6b6a68" }}>Forgot Password?</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute", 
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
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    margin: 20,
  },
  screen: {
    // margin: 20,
    marginTop: 25,
  },
  heading: {
    fontSize: 24,
    color: "#727272",
    paddingTop: 25,
    // padding: 20,
  },
  form: {
    // margin: 20,
    marginTop: 20,
    overflow: "hidden",
    marginBottom: 35,
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
    backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
    // bottom: 60,
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
