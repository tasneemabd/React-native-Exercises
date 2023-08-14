import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container } >
     
        <TouchableOpacity
          onPress={() => alert("Say Hello")}
          style={{
            backgroundColor: "#ff637c",
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginBottom:20,
            alignSelf: "center",
          }}
        >
          <Text>Say Hello</Text>
        </TouchableOpacity>

        
  
        <TouchableOpacity
          onPress={() => alert("Say Goodbay")}
          style={{
            backgroundColor: '#ff637c',
            paddingHorizontal: 20,
            paddingVertical: 20,
            alignSelf: "center",
          }}>
          <Text>Say Goodbay</Text>
        </TouchableOpacity>
    
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
});
