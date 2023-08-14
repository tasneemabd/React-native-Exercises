import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count ,setCount]=useState(0)
  return (
    <View style={styles.container}>
      <Text>You've pressed the buttom: ${count} time </Text>

      <Button title='Press Me ' onPress={()=>{

setCount(count+1)
      }}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
