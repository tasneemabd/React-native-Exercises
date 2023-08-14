import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Sequre = ({ text, bgColor = '#EAF2F8' }) => {
  return (
    <View style={[styles.Box, { backgroundColor: bgColor }]}>
      <Text>{text}</Text>
    </View>
  );
};

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {arr.map(item => (
          <Sequre key={item} text={`sequre ${item}`} bgColor="#EAF2F8" />
        ))}
      </ScrollView>
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
  contentContainer: {
    alignItems: 'center',
  },
  Box: {
    backgroundColor: '#EAF2F8',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
