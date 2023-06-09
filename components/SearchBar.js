import { View, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "#dddcdc",
    padding: 10,
    borderRadius: 10,
    color: "#000000",
    borderWidth: 1,
  },
});

export default SearchBar;
