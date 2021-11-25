import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps{
  placeholder: string;
  icon;
  validator: (input) => boolean;
}

const SIZE = 20;
const Valid = true;
const Invalid = false;
const Current = null;
type InputState = typeof Valid | typeof Invalid | typeof Current;

const TextInput = ({ icon,validator,  ...props }: TextInputProps) => {
  const [input, setInput] = React.useState("");
  const [state, setState] = React.useState<InputState>(Current);
  const color = state === Current ? "#000" : state === Valid ? "green" : "red";

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== validator(input)){
      validate();
    }
  }
  const validate = () =>{
    const valid = validator(input);
    setState(valid);
  } 
  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: 58,
          alignItems: "center",
          borderWidth: 1,
          borderBottomWidth: 3,
          borderColor: "#efece7",
        },
        { borderBottomColor: color },
      ]}
    >
      <View style={{ padding: 7 }}>
        <Icon name={icon}  size={14} />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <RNTextInput
          placeholderTextColor="#000"
          maxLength={50}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </View>
      {(state === Valid || state === Invalid) && (
        <View style={styles.icon}>
          <Icon
            name={state === Valid ? "check" : "x"}
            color={state === Valid ? "green" : "red"}
          />
        </View>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    // #efece7
  },
  icon: {
    borderBottomColor: "#000",
    height: SIZE,
    width: SIZE,
    borderRadius: 10,
  },
});
