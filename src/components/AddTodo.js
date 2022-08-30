import React, { useEffect, useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

export const AddTodo = ({ todoProps }) => {
  const [todo, setTodo] = useState([{ id: 0, title: "" }]);
  useEffect(() => {
    todoProps(todo);
  }, [todo]);
  const [textTodo, setTextTodo] = useState("");
  const textTodoChange = (e) => {
    setTextTodo(e.target.value);
  };

  const addTodo = () => {
    if (textTodo.trim()) {
      setTodo([
        ...todo,
        {
          id: todo[todo.length - 1].id + 1,
          title: textTodo,
        },
      ]);
      setTextTodo("");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChange={(e) => textTodoChange(e)}
        value={textTodo}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "70%",
    height: 40,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    fontSize: 20,
  },
});
