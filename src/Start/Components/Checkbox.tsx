import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

const Checkbox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <RectButton onPress={() => setChecked((c) => !c)}>
      <View style={styles.container}>
        <View
          style={[
            styles.inside,
            { backgroundColor: checked ? "#000002" : "#fff" },
          ]}
        >
          <Icon name="check" color="#fff" />
        </View>
      </View>
    </RectButton>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inside: {
    borderRadius: 3,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 10,
  },
});
