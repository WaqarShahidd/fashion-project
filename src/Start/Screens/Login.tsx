import * as React from "react";
import { Text, View, StyleSheet, Pressable, Linking } from "react-native";
import { Routes, StackNavigationProps } from "../../../components/navigation";
import TextInput from "../Components/TextInput";
import { Feather as Icon } from "@expo/vector-icons";
import Checkbox from "../Components/Checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const passwordValidator = (password: string) =>
  /^[A-Za-z]\w{5,11}$/.test(password);

// const Separator = () =>  <View style = {styles.separator} />
const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const [pickerFocused, setPickerFocused] = React.useState(false);

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
            autoCompleteType="email"
          />

          <TextInput
            icon="lock"
            placeholder="Enter your password"
            validator={passwordValidator}
            autoCompleteType="password"
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ResetPassword");
            }}
          >
            <Text
              style={{
                color: "#6b6a68",
                textDecorationLine: "underline",
                fontWeight: "400",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 35,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#44585F" : "#2c393f",
              },
              styles.button,
            ]}
            onPress={() => {
              alert("Login successful");
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialIcon
            type="twitter"
            underlayColor="#DDDDDD"
            onPress={() => Linking.openURL("https://twitter.com")}
          />
          <SocialIcon
            type="facebook"
            underlayColor="#DDDDDD"
            onPress={() => Linking.openURL("https://www.facebook.com")}
          />
          <SocialIcon
            type="google"
            underlayColor="#DDDDDD"
            onPress={() => Linking.openURL("https://myaccount.google.com/")}
          />
          <SocialIcon
            light
            type="apple"
            onPress={() => Linking.openURL("https://www.icloud.com")}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "300" }}>
            Don't have an account yet?
            <Text> </Text>
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "300" }}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              Sign Up
            </Text>
          </Text>
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
    color: "#000",
    paddingTop: 25,
    fontWeight: 'bold'
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
    // backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
    // bottom: 60,
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
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
     color: "#fff",
  },
});
