import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { Modalize } from "react-native-modalize";
import {
  Routes,
  StackNavigationProps,
} from "../../../../components/navigation";

const winHeight = Dimensions.get("window").height;
const ShoppingModal = () => {
  const modalRef = React.useRef<any>();

  const onOpen = () => {
    const modal = modalRef.current;

    if (modal) {
      modal.open();
    }
  };
  const [fav, setFav] = React.useState("favorite");

  const toggleFav = () => {
    setFav(fav === "favorite" ? "favorite-outline" : "favorite");
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={400}
        HeaderComponent={
          <>
            <Text></Text>
          </>
        }
        withHandle={false}
      >
        <View style={{ height: winHeight, backgroundColor: "#fff" }}>
          <View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>Denim Jacket</Text>

              <TouchableOpacity onPress={toggleFav}>
                <MaterialIcons
                  name={fav === "favorite" ? "favorite-outline" : "favorite"}
                  size={22}
                  color={"#000"}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>450$</Text>
            <View
              style={{
                flex: 0,
                height: 1,
                backgroundColor: "black",
                margin: 20,
              }}
            />
          </View>
          <Text style={styles.desc}>This is beautiful buy please</Text>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#44585F" : "#2c393f",
              },
              styles.button,
            ]}
            onPress={() => {
              alert("Addded to cart");
            }}
          >
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </Modalize>
    </>
  );
};

export default ShoppingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  name: {
    fontWeight: "bold",
    fontSize: 26,
    color: "black",
  },

  listItem: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    flexDirection: "row",
  },
  price: {
    fontWeight: "100",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 16,
    marginLeft: 20,
    marginTop: -10,
  },
  desc: {
    fontWeight: "100",
    fontSize: 14,
    color: "black",
    paddingHorizontal: 6,
    marginLeft: 20,
    marginTop: 0,
  },
  button: {
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
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
    fontFamily: "",
  },
});
