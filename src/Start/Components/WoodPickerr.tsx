import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

import type { PickerItem } from "react-native-woodpicker";
import { Picker } from "react-native-woodpicker";
import { list } from "./CountryList";
interface WoodPickerrProps {}

const WoodPickerr = (props: WoodPickerrProps) => {
  const [pickedData, setPickedData] = React.useState<PickerItem>();
  const list: Array<PickerItem> = [
    {
      label: "Select a Country",
      value: 1,
    },
    {
      label: "France",
      value: 2,
    },
    {
      label: "Germany",
      value: 3,
    },
    {
      label: "Norway",
      value: 4,
    },
    {
      label: "Finland",
      value: 5,
    },
    {
      label: "Pakistan",
      value: 6,
    },
    {
      label: "Dubai",
      value: 7,
    },
    {
      label: "Saudi Arabia",
      value: 8,
    },
    {
      label: "United State of America",
      value: 9,
    },
    {
      label: "United Kingdom",
      value: 10,
    },
  ];

  return (
    <View>
      <Picker
        item={pickedData}
        items={list}
        onItemChange={setPickedData}
        title="Country"
        placeholder="Select Country"
        // isNullable={true}
        itemColor="black"
        //backdropAnimation={{ opacity: 0 }}
        //mode="dropdown"
        textInputStyle={{
          color: "gray",
        }}
        //disable
      />
    </View>
  );
};

export default WoodPickerr;

const styles = StyleSheet.create({
  container: {},
});
