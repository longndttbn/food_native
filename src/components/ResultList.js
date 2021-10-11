import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {withNavigation} from 'react-navigation'
import ResultDetail from "./ResultDetail";
import {NAVIGATE_PARAM_DETAIL} from "../constant/Constant"

const ResultList = (props) => {


  if (!props.results.length) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            
            <TouchableOpacity
              onPress={() => {
                
                props.navigation.navigate("ResultsShow", {id : item.id})
              }}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  list: {
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 5,
  },
});

export default withNavigation(ResultList);
