import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WishlistProps {}

const Wishlist = (props: WishlistProps) => {
  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
