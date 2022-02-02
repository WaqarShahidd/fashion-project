import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { Modalize } from "react-native-modalize";
import { Feather as Icon, MaterialIcons } from "@expo/vector-icons";
import { addToCart } from "../../../Redux/Shopping/shoppingActions";
import { useDispatch } from "react-redux";

const winHeight = Dimensions.get("window").height;

const TestModal = ({ modalRef, data }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const [fav, setFav] = React.useState("favorite");

  const toggleFav = () => {
    setFav(fav === "favorite" ? "favorite-outline" : "favorite");
  };

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
              {data.name}
            </Text>

            <Pressable onPress={toggleFav}>
              <MaterialIcons
                name={fav === "favorite" ? "favorite-outline" : "favorite"}
                size={22}
                color={"#000"}
              />
            </Pressable>
          </View>

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
            {data.price}$
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
        <View style={{ paddingTop: "4%" }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#44585F" : "#2c393f",
              },
              styles.button,
            ]}
            onPress={() => {
              addProduct(data);
            }}
          >
            <Icon
              name="plus"
              size={20}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Add to cartdada</Text>
          </Pressable>
        </View>
      </View>
    </Modalize>
  );
};

export default TestModal;

const styles = StyleSheet.create({
  desc: {
    fontWeight: "100",
    fontSize: 14,
    color: "black",
    paddingHorizontal: 6,
    marginLeft: 20,
    marginTop: 0,
  },
  button: {
    bottom: 0,
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
