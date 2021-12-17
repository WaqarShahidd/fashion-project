import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { Header } from "react-native-elements";
import Card from "../Card";
import Categories from "../CollectionCircle";
import { ScrollView } from "react-native-gesture-handler";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Offer from "../OfferCards";
import Test from "../Test";
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AbrilFatface_400Regular,
  useFonts,
} from "@expo-google-fonts/abril-fatface";

interface HomeScreenProps {}



const HomeScreen = (props: HomeScreenProps) => {  
  const tabBarheight = useBottomTabBarHeight();
  let [fontsLoaded] = useFonts({
     AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {

  return (
    <View style={styles.container}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 0.1,
            height: 1,
            backgroundColor: "black",
            marginLeft: 15,
          }}
        />

        <View>
          <Text
            style={{
              width: 90,
              textAlign: "center",
              fontSize: 26,
              fontFamily: "AbrilFatface_400Regular",
            }}
          >
            MILAN
          </Text>
        </View>
        <View
          style={{
            flex: 0.9,
            height: 1,
            backgroundColor: "black",
            marginRight: 15,
          }}
        />
      </View>
      {/* <Header
        // leftComponent={{
        //   icon: "person-outline",
        //   color: "#fff",
        // }}
        centerComponent={{
          text: "MILAN",
          style: { color: "#fff", fontSize: 18 },
        }}
        // rightComponent={{
        //   icon: "shopping-bag",
        //   color: "#fff",
        // }}
        containerStyle={{
          backgroundColor: "#c39476",
          justifyContent: "space-around",
        }}
      /> */}
      <View style={{ paddingBottom: 112 }}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingBottom: tabBarheight }}
        >
          <View style={{ marginTop: 20 }}>
            <Categories />
          </View>
          <View style={{ marginTop: 20 }}>
            <Test />
            <View style={{ marginTop: 40 }}>
              <Offer />
            </View>
          </View>
          <View style={{ bottom: 50 }}></View>
        </ScrollView>
      </View>
      <View style={{ bottom: 0, flex: 0.2, backgroundColor: "#000" }} />
    </View>
  );
    }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
