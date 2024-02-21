import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Navigator from './navigations/navigation';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navigator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
