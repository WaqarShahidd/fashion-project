import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Categories from "../HomeComponents/CollectionCircle";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Offer from "../HomeComponents/OfferCards";
import Slider from "../HomeComponents/Slider";
import AppLoading from "expo-app-loading";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";

const winHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const tabBarheight = useBottomTabBarHeight();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Platform.OS === "android" ? 0 : 20,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 0.1,
              height: 1,
              backgroundColor: "black",
              marginLeft: 15,
            }}
          />

          <View>
            <Text
              style={{
                width: 90,
                textAlign: "center",
                fontSize: 26,
                fontFamily: "PlayfairDisplay_700Bold",
              }}
            >
              MILAN
            </Text>
          </View>
          <View
            style={{
              flex: 0.9,
              height: 1,
              backgroundColor: "black",
              marginRight: 15,
            }}
          />
        </View>
        <View style={{ paddingBottom: 120 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={{ paddingBottom: tabBarheight }}
            data={[]}
            keyExtractor={() => ""}
            renderItem={null}
            ListHeaderComponent={() => (
              <View style={{ marginTop: 20 }}>
                <Categories />
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={{ marginTop: 20 }}>
                <Slider />
              </View>
            )}
            ListFooterComponent={() => (
              <View style={{ marginTop: 40 }}>
                <Offer />
              </View>
            )}
          />
        </View>
        <View style={{ bottom: 0, flex: 0.2, backgroundColor: "#000" }} />
      </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
