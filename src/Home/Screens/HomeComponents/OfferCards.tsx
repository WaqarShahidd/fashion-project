import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { offers } from "../../Components/offersData";
import { useFonts, Questrial_400Regular } from "@expo-google-fonts/questrial";
import AppLoading from "expo-app-loading";

interface OfferProps {}

const Offer = (props: OfferProps) => {
  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={offers}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.btn}>
                    <ImageBackground
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          right: 4,
                          bottom: 0,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#fff",
                          height: 35,
                          width: "25%",
                          borderRadius: 25,
                        }}
                      >
                        <Text style={styles.textStyle}>Explore</Text>
                      </View>
                      <View
                        style={{
                          position: "absolute",
                          left: 4,
                          bottom: 0,
                          justifyContent: "center",
                          paddingLeft: 6,
                          //alignItems: "center",
                          //backgroundColor: "#fff",
                          height: 35,
                          width: "50%",
                          borderRadius: 25,
                        }}
                      >
                        <Text
                          style={{
                            //fontWeight: "bold",
                            bottom: 0,
                            fontSize: 18,
                            color: "#000",
                            fontFamily: "Questrial_400Regular",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
};

export default Offer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBtn: {
    marginLeft: "4%",
    marginRight: "4%",

    marginBottom: Platform.OS === "android" ? 30 : 20,
    justifyContent: "center",
    //backgroundColor: "red",
    borderRadius: 8,
  },
  btn: {
    height: 175,
    width: "100%",
    paddingRight: 0,
    paddingBottom: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 7,
    borderRadius: 8,
    backgroundColor: "#EBEBEB",
  },
  image: {
    flex: 1,
    borderRadius: 20,
    height: 130,
    width: "100%",
    marginTop: 0,
  },
  textStyle: {
    fontWeight: "bold",
    bottom: 0,
    fontSize: 14,
    color: "#000",
    fontFamily: "Questrial_400Regular",
  },
});
