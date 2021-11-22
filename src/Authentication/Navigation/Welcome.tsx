import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground, StatusBar, Pressable, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Button from '../../../components/Button';
import { Routes, StackNavigationProps } from './navigation';
const { width, height } = Dimensions.get("screen");


// https://i.pinimg.com/564x/21/32/54/21325490164e80f3e2732a36266a81b1.jpg
// https://www.net-a-porter.com/variants/images/6011092390987882/ou/w2000_q60.jpg

export default function Welcome({
   navigation,
 }: StackNavigationProps<Routes, "Welcome">) {
 
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: "https://i.pinimg.com/564x/62/0e/c7/620ec702be65ee96d845f38fd151bb55.jpg",
              headers: {
                Accept: "*/*",
              },
            }}
          />
          <View
            style={{
              flex: 1,
              position: "absolute",
              justifyContent: "flex-start",
              paddingLeft: 10,
              paddingTop: 10,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 35, height: 35, borderRadius: 10 }}
              source={require("../../../assets/m.png")}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                // fontFamily: "Helvetica",
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Milan
            </Text>
            <Pressable
              style={{
                flex: 1,
                paddingTop: 20,
                position: "absolute",
                height: 35,
                width: 35,
                marginHorizontal: 320,
              }}
              onPress={() => {
                navigation.navigate("Onboarding");
              }}
            >
              <Text style={{ color: "white" }}>Back</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>Start Shopping</Text>
          {/* <Text style={styles.desc}>
          Login to your account below or signup for an amazing experience
        </Text> */}
        </View>
        <View style={styles.bottomView}>
          <Pressable
            style={styles.btnprim}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonTextPrim}>Have an account? Login</Text>
          </Pressable>
          <Pressable
            style={styles.btnsec}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.buttonTextSec}>Join us, It's Free</Text>
          </Pressable>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  img: {
    width: width,
    height: height,
    resizeMode: "cover",
  },

  bottomView: {
    // backgroundColor:'white',
    flex: 1,
    bottom: 70,
    // width: "100%",
    // height: 50,
    // // bottom: 0,
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
    // alignContent: "center",

  },
  textView: {
    // flex: 1,
    bottom: 200,
    position: "absolute",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // alignContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    // paddingBottom: 10,
    // marginBottom: 10,
    padding: 15,
    color: "#efe3d1",
    bottom: 50,
    marginRight: 120,
  },
  desc: {
    fontWeight: "600",
    padding: 30,
    color: "#fff",
    // alignItems: "center",
    margin: 20,
  },
  btnprim: {
    // alignSelf:'center',
    height: 50,
    width: 340,
    backgroundColor: "#c39476",
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
    marginTop: 30,
  },
  btnsec: {
    // alignSelf:'center',
    height: 50,
    width: 340,
    backgroundColor: "#fff",
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
    marginTop: 30,
  },
  textStyle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },

  buttonTextPrim: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonTextSec: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});

