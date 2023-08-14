import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const  [name, setName]=useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="jone"
        placeholderTextColor="rgba(0,0,0,0.5)"
        onChangeText={(text)=>setName(text)}
      />
      <Button title="say Hello" onPress ={() => alert(`todo ${name}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "800",
  },
});
