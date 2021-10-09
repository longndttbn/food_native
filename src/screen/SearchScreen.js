import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => console.log('submmited')} />
      <Text>Search= {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
