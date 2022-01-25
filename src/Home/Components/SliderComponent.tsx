import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const SliderComponent = ({ testing: { image } }) => {
  return (
    <View style={styles.slide}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="cover"
        style={styles.sliderImage}
      />
    </View>
  );
};

export default SliderComponent;

const styles = StyleSheet.create({
  container: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});
