import React from "react";
import { Text, StyleSheet, View } from "react-native";
export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },
});
