import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { Routes, StackNavigationProps } from "../../../components/navigation";
import { Feather as Icon } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth } from "../../../firebase";

const winHeight = Dimensions.get("window").height;
//asdasdads
const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredentials) => {
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };
  // React.useEffect(() => {
  //   const unsub = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  //   return unsub;
  // }, []);
  return (
    <View style={styles.container}>
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
      <KeyboardAwareScrollView>
        <View style={styles.form}>
          <TextInput style={styles.textInp} placeholder="First Name" />
          <TextInput style={styles.textInp} placeholder="Last Name" />
          <TextInput
            style={styles.textInp}
            placeholder="Email"
            autoCompleteType="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInp}
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry={true}
            value={pass}
            onChangeText={(text) => setPass(text)}
          />
          <TextInput style={styles.textInp} placeholder="Address" />
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <TextInput
              style={[styles.textInpSec, { marginLeft: -30 }]}
              placeholder="State"
            />
            <TextInput
              style={[styles.textInpSec, { marginRight: -30 }]}
              placeholder="Post-Code"
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
                backgroundColor: pressed ? "#44585F" : "#2c393f",
              },
              styles.button,
            ]}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
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
            Already have an account?
            <Text> </Text>
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "300" }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efece7",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  screen: {
    marginTop: 10,
    height: 75,
  },
  heading: {
    fontSize: 24,
    color: "#000",
    paddingTop: 15,
    fontWeight: "bold",
    // padding: 20,
  },
  form: {
    marginTop: 15,
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
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderWidth: 1.5,
    borderColor: "#2c393f",
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
    color: "#fff",
  },
});
