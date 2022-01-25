import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { data } from "../../Components/cardData";
import SliderComponent from "../../Components/SliderComponent";

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay horizontal={false} height={200} activeDotColor="#000">
        {data.map((testing) => (
          <SliderComponent key={testing.key} testing={testing} />
        ))}
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "92.5%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

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
