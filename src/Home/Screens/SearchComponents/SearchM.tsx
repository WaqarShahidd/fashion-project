import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { item } from "../../Components/ItemData";
import { Button, Header } from "react-native-elements";
import { Routes, StackNavigationProps } from "../../../../components/navigation";
import SearchBar from './../../Components/SearchBar'
import {
  Raleway_100Thin,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight,
  Raleway_200ExtraLight_Italic,
  Raleway_300Light,
  Raleway_300Light_Italic,
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_500Medium_Italic,
  Raleway_600SemiBold,
  Raleway_600SemiBold_Italic,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold,
  Raleway_800ExtraBold_Italic,
  Raleway_900Black,
  Raleway_900Black_Italic,
  useFonts
} from "@expo-google-fonts/raleway";
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
import AppLoading from "expo-app-loading";

const SearchM = ({ navigation }: StackNavigationProps<Routes, "SearchM">) => {
  
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
    Raleway_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Header
          leftComponent={
            <Icon
              name="chevron-left"
              size={20}
              color="#000"
              onPress={() => {
                navigation.navigate("Search");
              }}
              style={{marginTop:5}}
            />
          }
          centerComponent={{
            text: "Men",
            style: {
              color: "#000",
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "PlayfairDisplay_700Bold",
            },
          }}
          containerStyle={{
            backgroundColor: "#fff",
            height: 70,
            borderBottomColor: "#fff",
          }}
        />
        <SearchBar />
      </View>
      <FlatList
        data={item}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.title}</Text>

                <Icon name="heart" size={20} style={{ color: "#000" }} />
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );}
};

export default SearchM;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  price: {
    fontWeight: "100",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  listItem: {
    height: 220,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
