import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { cat } from "../../Components/categories";
import { useFonts, Questrial_400Regular } from "@expo-google-fonts/questrial";
import AppLoading from "expo-app-loading";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Feather as Icon, MaterialIcons } from "@expo/vector-icons";

const winHeight = Dimensions.get("window").height;

const Categories = () => {
  const [catagoriesData, setCatagoriesData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fashionstore.technologiasolutions.com/api/categories")
      .then((response) => response.json())
      .then((json) => setCatagoriesData(json))
      .catch((error) => console.error(error));
  }, []);

  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
          <Icon
            name="chevron-left"
            size={20}
            color="#000"
            onPress={() => {}}
            style={{ margin: 20, position: "absolute", left: 0 }}
          />
          <Text
            style={{
              fontSize: 20,

              textAlign: "center",

              fontFamily: "PlayfairDisplay_700Bold",
            }}
          >
            CATEGORIES
          </Text>
        </View>

        <View style={{ paddingTop: 15, flex: 1 }}>
          <FlatList
            data={cat}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback
                  style={styles.card}
                  onPress={() => {}}
                >
                  <View style={styles.cardImgWrapper}>
                    <Image
                      style={styles.cardImg}
                      resizeMode="contain"
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <MaterialIcons
                      name={"chevron-right"}
                      size={22}
                      color={"#000"}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </View>
    );
  }
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listItem: {
    height: 100,
    width: Dimensions.get("window").width,
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
    height: "100%",
    width: "100%",
    marginBottom: 7.5,
    borderRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  name: {
    flex: 2,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    fontFamily: "Questrial_400Regular",
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 20,
  },
  cardImgWrapper: {
    flex: 1,
    marginTop: 1,
    marginBottom: 1,
    marginRight: 0.1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#EBEBEB",
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "100",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
