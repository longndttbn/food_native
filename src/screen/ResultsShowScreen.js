import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import useDetail from "../hooks/useDetail";
import { NAVIGATE_PARAM_DETAIL } from './../constant/Constant';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam(NAVIGATE_PARAM_DETAIL);
  const [result] = useDetail(id);
  if (!result) {
    return null;
  }

  return (
    <View>
     
      <Text>{result.alias}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item}) =>{
        return <Image style={styles.image} source={{uri: item}}/> 
      }}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    margin: 5
  },
});

export default ResultsShowScreen;
