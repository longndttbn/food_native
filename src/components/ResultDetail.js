import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const ResultDetail = ({result}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text >{result.rating} Ratings, {result.review_count} Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ResultDetail;
