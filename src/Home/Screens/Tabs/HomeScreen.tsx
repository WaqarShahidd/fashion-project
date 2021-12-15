import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Card from "../Card";
import { Feather as Icon } from "@expo/vector-icons";
import Categories from "../Categories";
import { ScrollView } from "react-native-gesture-handler";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import GridItem from '../GridItem';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const tabBarheight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: "person-outline",
          color: "#fff",
        }}
        centerComponent={{
          text: "MILAN",
          style: { color: "#fff", fontSize: 18 },
        }}
        rightComponent={{
          icon: "shopping-bag",
          color: "#fff",
        }}
        containerStyle={{
          backgroundColor: "#000",
          justifyContent: "space-around",
        }}
      />

      <View style={{ paddingBottom: 115 }}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingBottom: tabBarheight }}
        >
          <View style={{ marginTop: 20 }}>
            <Categories />
          </View>
          <View style={{ marginTop: 20 }}>
            <Card />
            <View style={{ marginTop: 300 }}>
              
              <GridItem />
            </View>
          </View>
          <View style={{ bottom: 50 }}></View>
        </ScrollView>
      </View>

      <View style={{ bottom: 0, flex: 0.2, backgroundColor: "#000" }} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignContent: "center",
    //alignItems: "center",
  },
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
