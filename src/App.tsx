import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.headingText}>Abhishek</Text>
        </View>
        <ScrollView horizontal={true} style={styles.container}>
          {new Array(8).fill(1).map(() => (
            <Card />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdffe',
    flexDirection: 'row',
    gap: 1,
  },
  headingText: {
    fontSize: 24,
    color: 'red',
    padding: 5,
    fontWeight: '800',
  },
});

export default App;
