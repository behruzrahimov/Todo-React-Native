import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const ListTodo = ({ todoPost }) => {
  return (
    <View style={styles.list}>
      {todoPost &&
        todoPost.map(
          (todo) =>
            todo.id !== 0 && (
              <View style={styles.link_list} key={todo.id}>
                <View style={styles.id}>
                  <Text style={styles.id_text}>{todo.id}.</Text>
                </View>
                <View style={styles.title}>
                  <Text style={styles.title_text}>{todo.title}</Text>
                </View>
              </View>
            )
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  link_list: {
    margin: 10,
    width: "80%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  id: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "90%",
  },
  id_text: {
    fontSize: 22,
  },
  title_text: {
    fontSize: 22,
  },
});
