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
import { offers } from "../Components/offers";

interface OfferProps {}

const Offer = (props: OfferProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={styles.categoryBtn}>
              <TouchableOpacity onPress={() => {}} style={styles.btn}>
                <View style={[StyleSheet.absoluteFill, { borderRadius: 6 }]}>
                  <Image
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                </View>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? 65 : 25,
    marginBottom: Platform.OS === "android" ? 30 : 25,
    justifyContent: "center",
    //backgroundColor: "blue",
  },
  categoryBtn: {
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: 30,
    //flex: 1,
    // width: "90%",
    // height: "30%",
    // marginHorizontal: 0,
    //alignSelf: "center",
    //backgroundColor: "#fff",
  },
  btn: {
    height: 175,
    width: "100%",
    //
    paddingRight: 15,
    paddingBottom: 15,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 7,
  },
  image: {
    flex: 1,
  },
});
