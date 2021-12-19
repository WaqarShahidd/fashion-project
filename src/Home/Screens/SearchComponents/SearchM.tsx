import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Feather as Icon, MaterialIcons } from "@expo/vector-icons";
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
} from "@expo-google-fonts/raleway";import { Questrial_400Regular } from "@expo-google-fonts/questrial";
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
import {
  Amiko_400Regular,
  Amiko_600SemiBold,
  Amiko_700Bold,
} from "@expo-google-fonts/amiko";
import AppLoading from "expo-app-loading";
import { Modalize } from "react-native-modalize";


const winHeight = Dimensions.get("window").height;

const Modal = ({ modalRef}) => {
  const [fav, setFav] = React.useState("favorite");

  const toggleFav = () => {
    setFav(fav === "favorite" ? "favorite-outline" : "favorite");
  };let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
    Raleway_400Regular,
    PlayfairDisplay_700Bold,
    Questrial_400Regular,
    Amiko_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
  return (
    <Modalize
      ref={modalRef}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      snapPoint={300}
      HeaderComponent={<View style={{ height: 15 }} />}
      withHandle={false}
    >
      <View style={{ height: winHeight, backgroundColor: "#fff" }}>
        <View style={{ backgroundColor: "#fff" }}>
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 5,
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 26,
                color: "black",
                fontFamily: "Questrial_400Regular",
              }}
            >
              Denim Jacket
            </Text>

            <Pressable onPress={toggleFav}>
              <MaterialIcons
                name={fav === "favorite" ? "favorite-outline" : "favorite"}
                size={22}
                color={"#000"}
              />
            </Pressable>
          </View>
          <TouchableOpacity
            style={{
              right: 0,
              marginRight: 25,
              marginTop: -10,
              position: "absolute",
            }}
          >
            <MaterialIcons name={"share"} size={22} color={"#000"} />
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: "100",
              fontSize: 16,
              color: "black",
              paddingHorizontal: 25,
              marginLeft: 0,
              marginTop: -10,
            }}
          >
            450$
          </Text>
          <View
            style={{
              flex: 0,
              height: 1,
              backgroundColor: "black",

              marginBottom: 20,
              marginTop: 30,
              marginLeft: 25,
              marginRight: 25,
              paddingHorizontal: 25,
            }}
          />
        </View>
        <Text style={styles.desc}>This is beautiful buy please</Text>
        <View style={{ paddingTop: winHeight / 20 }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#44585F" : "#2c393f",
              },
              styles.button,
            ]}
            onPress={() => {
              alert("Addded to cart");
            }}
          >
            <Icon
              name="plus"
              size={20}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </View>
    </Modalize>
  );}
}


const SearchM = ({ navigation }: StackNavigationProps<Routes, "SearchM">) => {
const modalRef = React.useRef(null);

const onOpen = () => {
  const modal = modalRef.current;

  if (modal) {
    modal.open();
  }
};

  const [fav, setFav] = React.useState("favorite");
   
   const toggleFav = () => {
     setFav(fav === "favorite" ? "favorite-outline" : "favorite");
   };
   

  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
    Raleway_400Regular,
    PlayfairDisplay_700Bold,
    Questrial_400Regular,
    Amiko_700Bold,
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
              style={{ marginTop: 5 }}
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
            height: winHeight * 0.1,
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
              <TouchableOpacity onPress={onOpen}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>

              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.title}</Text>

                <TouchableOpacity >
                  <MaterialIcons
                    name={"favorite-outline" }
                    size={22}
                    color={"#000"}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          );
        }}
      />
      <Modal modalRef={modalRef}  />
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
    //fontFamily: "Questrial_400Regular",
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
  desc: {
    fontWeight: "100",
    fontSize: 14,
    color: "black",
    paddingHorizontal: 6,
    marginLeft: 20,
    marginTop: 0,
  },
  button: {
    bottom:0,
    margin: 20,
    height: 50,
    width: "90%",
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
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
    fontFamily: "Questrial_400Regular",
  },
});
