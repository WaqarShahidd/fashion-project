import * as React from "react";
import { Text, View, StyleSheet, Pressable, Linking,TextInput } from "react-native";
import { Routes, StackNavigationProps } from "../../../components/navigation";
import { Feather as Icon } from "@expo/vector-icons";
import Checkbox from "../Components/Checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from "react-native-elements";
import { auth } from "../../../firebase";

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const passwordValidator = (password: string) =>
  /^[A-Za-z]\w{5,11}$/.test(password);

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((userCredentials) => {
        navigation.navigate("Home");
      })            
      .catch((error) => alert(error.message));
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Icon name="x" size={30} color="#000" onPress={() => {navigation.navigate("Home");}} />
      </View>
        <Text style={styles.heading}>Existing Customer</Text>

      <View style={styles.form}>
        <View style={{ padding: 7 }}>
          <Icon name="mail" size={14} />
        </View>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.form}>
        <View style={{ padding: 7 }}>
          <Icon name="lock" size={14} />
        </View>
        <TextInput
          placeholderTextColor="#000"
          placeholder="Enter your password"
          secureTextEntry={true}
          value={pass}
          onChangeText={(text) => setPass(text)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Checkbox />
          <Text>Remember Me</Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
        >
          <Text
            style={{
              color: "#6b6a68",
              textDecorationLine: "underline",
              fontWeight: "400",
              position: "absolute",
              right: 0,
            }}
          >
            Forgot Password?
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: 30,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#44585F" : "#2c393f",
            },
            styles.button,
          ]}
          onPress={handleLogin}
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
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efece7",
    height: "100%",
    width: "100%",
    padding: 25,
  },
  screen: {
    marginTop: 10,
    marginLeft:-5
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
    marginTop: 15,
    borderBottomColor: "#000",
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
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
