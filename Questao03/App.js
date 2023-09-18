import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={[styles.square, { backgroundColor: 'blue' }]}>
          	<Text style={styles.text}>Square 1</Text>
        </View>
        <View style={[styles.square, { backgroundColor: 'green' }]}>
          	<Text style={styles.text}>Square 2</Text>
        </View>
        <View style={[styles.square, { backgroundColor: 'red' }]}>
          	<Text style={styles.text}>Square 3</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});