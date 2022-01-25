import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "../../Components/CollectionCircleComponent";
import { collection } from "../../Components/collectionData";

const CollectionCircle = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {collection.map((collection) => (
        <Category key={collection.id} category={collection} />
      ))}
    </ScrollView>
  );
};

export default CollectionCircle;

const styles = StyleSheet.create({
  container: {},
});
