import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card() {
  return (
    <View style={styles.card}>
      <Text>Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 8,
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    elevation: 4,
  },
});
