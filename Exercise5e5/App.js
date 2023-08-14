import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.contener}>
      <View style={styles.box}>
        <Text>square 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#EAFAF1" }]}>
        <Text>square 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#E5E8E8" }]}>
        <Text>square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contener: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding:30,
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "#F9EBEA",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
