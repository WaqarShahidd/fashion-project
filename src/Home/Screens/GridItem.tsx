import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";


interface GridItemProps {}

const categories = [
  {
    id: 11,
    title: "Winter",
    color: "#FFE8E9",
  },
  {
    id: 12,
    title: "What's New",
    color: "#E4C1F9",
  },
  {
    id: 13,
    title: "Top Wear",
    color: "#D3F8E2",
  },
  {
    id: 14,
    title: "Footwear",
    color: "#EDE7B1",
  },
  {
    id: 15,
    title: "Active Wear",
    color: "#A9DEF9",
  },
];

const GridItem = (props: GridItemProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {}}
              style={styles.btn}
            >
              <View style={{ flex: 1, padding: 5 }}>
                <View
                  style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: item.color, borderRadius: 6 },
                  ]}
                ></View>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
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
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
    backgroundColor: "#000",
  },
  btn: {
height: 175, width: 175, paddingRight:15, paddingBottom:15,
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 0,    
  },
});
