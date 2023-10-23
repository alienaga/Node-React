import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var hello="Hello World!";
var bootcamp="Sanber Code";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{hello}, ini adalah program pertama saya di Smartphone yang menggunakan React JS!</Text>

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
