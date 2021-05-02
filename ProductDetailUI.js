import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetailUI = () => {
  return (
    <View style={styles.screen}>
      <Text>Product Details</Text>
      <Text>Product Name</Text>
      <Text>Product Cost</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailUI;
