import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const winHeight = Dimensions.get("window").height;

const Profile = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isFav, setIsFav] = useState(0);
  const [catalog, setCatalog] = useState(0);
  const [category, setcategory] = useState(0);

  const click = () => {
    fetch("https://fashionstore.technologiasolutions.com/api/items/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        isFavourite: isFav,
        categoryId: catalog,
        catalogId: category,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.textInp}
          placeholder="Name"
          autoCompleteType="password"
          secureTextEntry={true}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textInp}
          placeholder="Name"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={(text) => setPrice(Number(text))}
        />
        <TextInput
          style={styles.textInp}
          placeholder="Name"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={(text) => setIsFav(Number(text))}
        />
        <TextInput
          style={styles.textInp}
          placeholder="Name"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={(text) => setCatalog(Number(text))}
        />
        <TextInput
          style={styles.textInp}
          placeholder="Name"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={(text) => setcategory(Number(text))}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#44585F" : "#2c393f",
            },
            styles.button,
          ]}
          onPress={click}
        >
          <Text>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
  textInp: {
    overflow: "hidden",
    marginBottom: 15,
    flexDirection: "column",
    height: 50,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderColor: "#efece7",
    alignContent: "center",
  },
  button: {
    height: 50,
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderWidth: 1.5,
    borderColor: "#2c393f",
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
