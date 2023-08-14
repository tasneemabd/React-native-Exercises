import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
<Button title='button1' onPress={()=> alert('hi')}> 
</Button>
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
