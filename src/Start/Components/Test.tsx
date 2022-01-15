import * as React from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { Routes, StackNavigationProps } from "../../../components/navigation";
import { Feather as Icon } from "@expo/vector-icons";
import Checkbox from "./Checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from "react-native-elements";
import { auth } from "../../../firebase";


const Test = ({ navigation }: StackNavigationProps<Routes, "Test">) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message))
  };
  return (
    <View
      style={{
        backgroundColor: "#efece7",
        height: "100%",
        width: "100%",
        padding: 25,
      }}
    >
      <View style={styles.screen}>
        <Icon name="x" size={30} color="#000" onPress={() => {}} />
        <Text style={styles.heading}>Existing Customer</Text>
      </View>

      <View style={styles.form}>
        <View style={{ padding: 7 }}>
          <Icon name="mail" size={14} />
        </View>
        <TextInput
          placeholder="Enter your email"
          //autoCompleteType="email"
          // placeholderTextColor="#000"
          //maxLength={50}
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
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: 35,
        }}
      >
        <Pressable style={styles.button} onPress={handleLogin }>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Test;

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
