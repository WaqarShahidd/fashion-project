import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";


interface SearchBarProps {}

const SearchBar = (props: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        autoComplete={true}
        style={{
          margin: 8,
          height: 40,
          borderRadius: 15,
          shadowOpacity: 0,
          backgroundColor: "#EBEBEB",
          fontFamily: "Roboto",
          
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  }
});
