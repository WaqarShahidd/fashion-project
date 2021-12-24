import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { catalog } from "./../../Components/catalogData";
import {
  Routes,
  StackNavigationProps,
} from "../../../../components/navigation";
import { useFonts, Questrial_400Regular } from "@expo-google-fonts/questrial";
import AppLoading from "expo-app-loading";
import { Header } from "react-native-elements";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from "@expo-google-fonts/playfair-display";

const winHeight = Dimensions.get("window").height;

const Search = ({ navigation }: StackNavigationProps<Routes, "Search">) => {
  // let [fontsLoaded] = useFonts({
  //   Questrial_400Regular,
  //   PlayfairDisplay_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }else {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: winHeight * 0.1,
          justifyContent: "center",
          backgroundColor: "white",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 26,

            textAlign: "center",

            fontFamily: "PlayfairDisplay_700Bold",
          }}
        >
          CATALOG
        </Text>
      </View>

      <View style={{ paddingTop: 15, flex: 1 }}>
        <FlatList
          data={catalog}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  item.title === "Men"
                    ? navigation.navigate("CategoriesM")
                    : item.title === "Women"
                    ? navigation.navigate("CategoriesW")
                    : navigation.navigate("Search");
                }}
              >
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
                <View style={styles.detailsContainer}>
                  <Text style={styles.name}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    //paddingBottom: 70,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    fontFamily: "Questrial_400Regular",
  },
  listItem: {
    height: 220,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
  },
  image: {
    height: 170,
    marginBottom: 7.5,
    borderRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
