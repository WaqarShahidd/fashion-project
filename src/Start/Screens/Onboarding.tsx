import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  Text,
   Pressable,
   Platform,
   TouchableOpacity,
} from "react-native";
import { DATA } from '../Components/dataa';
import { bgs } from "../Components/dataa";
import { Routes, StackNavigationProps } from "../../../components/navigation";

const { width, height } = Dimensions.get("screen");

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
          extrapolate: "clamp",
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
  
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar />
      <BackDrop scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        bounces={false}
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
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#F3E9E2" : "#fff",
          },
          styles.button,
        ]}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <TouchableOpacity activeOpacity={0.7}>
          
        <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>
      </Pressable>
      <Indicator scrollX={scrollX} />      
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
  },
  imgContainer: { flex: 0.7, paddingBottom: 70 },
  img: {
    width,
    height: height / 1.75,
    resizeMode: "cover",
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 275 : 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 26 : 24,
    paddingTop: Platform.OS === "android" ? 0 : 75,
    marginBottom: -5,
    bottom: -20,
    color: "#fff",
    alignItems: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
  },
  description: {
    fontWeight: Platform.OS === "android" ? "900" : "600",
    marginTop: Platform.OS === "android" ? 25 : 15,
    padding: Platform.OS === "android" ? 10 : 15,
    color: "#fff",
    alignItems: "center",
    margin: Platform.OS === "android" ? 15 : 10,
    bottom: Platform.OS === "android" ? -10 : -20,
    fontSize: Platform.OS === "android" ? 16 : 14,
  },
  indic: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
  },
  button: {
    height: 50,
    width: 240,
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
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#c39476",
  },
});
