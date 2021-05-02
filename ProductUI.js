import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProductUI = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Product</Text>
      <Button
        title="see more details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "ProductDetail",
          });
        }}
      ></Button>
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

export default ProductUI;
