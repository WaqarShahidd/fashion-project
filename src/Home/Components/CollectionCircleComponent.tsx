import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CategoryProps {
  category: {
    id: string;
    image: string;
    title: string;
    color: string;
  };
}

const Category = ({
  category: { color: backgroundColor, image, title },
}: CategoryProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{
            width: 60,
            height: 60,
          }}
        >
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={{ width: 60, height: 60, borderRadius: 30, backgroundColor }}
          />
        </View>
      </TouchableOpacity>
      <Text style={{ marginTop: 6, fontSize: 11 }}>{title}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    alignContent: "center",
    alignItems: "center",
  },
});
