import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
interface HeartProps {}

const Heart = (props: HeartProps) => {
  return <AntDesign name="heart" size={24} color="black" />;
};

export default Heart;
