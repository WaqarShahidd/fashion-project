import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  Text,
   Button,
} from "react-native";
import { DATA } from "./dataa";
import { bgs } from "./dataa";
// import Button  from "../../../components/Button";
// import { StackNavigationProp } from "@react-navigation/stack";
import { Routes, StackNavigationProps } from "./navigation";
// import { useNavigation } from "@react-navigation/core";
// import Welcome from "./Welcome";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { navigation } from "react-native-navigation";

const { width } = Dimensions.get("screen");

const Indicator = ({ scrollX }) => {
  return (
    <View style={styles.indic}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
           extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
        //    extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 6,
              width: 6,
              borderRadius: 5,
              backgroundColor: "#FFF",
              opacity,
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};
const BackDrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor,
        },
      ]}
    />
  );
};
export default function Onboarding( {navigation}: StackNavigationProps<Routes, "Onboarding"> ) {
  // const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        // bounces= {false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={styles.listRender}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: item.image }} style={styles.img} />
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
      <View style={styles.button}>
        <Button
          color="#c6ced1"
          title="Let's get started"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listRender: {
    width,
    // alignItems: "center",
    flex: 1,
  },
  imgContainer: { flex: 0.7, paddingBottom: 70 },
  img: {
    width: width,
    height: "150%",
    resizeMode: "cover",
  },
  bottomContainer: {
    flex: 0.3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    paddingTop: 80,
    marginBottom: -5,
    padding: 15,
    bottom: -10,
    color: "#fff",
    // textAlign: "left",
    alignItems: "center",
  },
  description: {
    fontWeight: "600",
    padding: 10,
    color: "#fff",
    alignItems: "center",
    margin: 10,
  },
  indic: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
  },
  button: {
    height: 50,
    width: 240,
    backgroundColor: "#2c393f",
    justifyContent: "center",
    alignItems: "center",
    bottom: 60,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
  },
});
