import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const Home = ({navigation}) => {
  return (
    <>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      ;{' '}
      <View>
        <Text style={styles.headingText}>Abhishek</Text>
      </View>
      <ScrollView horizontal={true} style={styles.container}>
        {new Array(8).fill(1).map(() => (
          <Card />
        ))}
      </ScrollView>
    </>
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

export default Home;
