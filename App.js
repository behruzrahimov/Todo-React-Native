import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { useState } from "react";
import { ListTodo } from "./src/components/ListTodo";
export default function App() {
  const [todo, setTodo] = useState([]);
  const todofunc = (todo) => {
    setTodo(todo);
  };
  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
      <AddTodo todoProps={todofunc} />
      <ListTodo todoPost={todo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
