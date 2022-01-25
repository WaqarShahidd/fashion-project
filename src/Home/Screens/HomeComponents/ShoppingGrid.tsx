import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

// const categories = [
//   {
//     id: 11,
//     title: "Winter",
//     color: "#FFE8E9",
//   },
//   {
//     id: 12,
//     title: "What's New",
//     color: "#E4C1F9",
//   },
//   {
//     id: 13,
//     title: "Top Wear",
//     color: "#D3F8E2",
//   },
//   {
//     id: 14,
//     title: "Footwear",
//     color: "#EDE7B1",
//   },
//   {
//     id: 15,
//     title: "Active Wear",
//     color: "#A9DEF9",
//   },
// ];

const GridItem = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fashionstore.technologiasolutions.com/api/items")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.categoryBtn}>
              <TouchableOpacity onPress={() => {}} style={styles.btn}>
                <View
                  style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: item.color, borderRadius: 6 },
                  ]}
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? 65 : 25,
    justifyContent: "center",
    marginLeft: 5,
    //backgroundColor: "#fff",
  },
  categoryBtn: {
    marginRight: Platform.OS === "android" ? -32 : -30,
    marginLeft: 20,
    marginTop: 30,
    //flex: 1,
    width: "50%",
    height: "100%",
    // marginHorizontal: 0,
    //alignSelf: "center",
    //backgroundColor: "#fff",
  },
  btn: {
    height: 175,
    width: "80%",
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
});
