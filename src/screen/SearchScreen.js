import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";
import SearchBar from "./../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();


  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={styles.container}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      <Text>{errorMessage ? errorMessage : null}</Text>
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
