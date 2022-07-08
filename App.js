import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';
import img from './assets/images/ModelX.jpeg';
import CarsList from './components/CarsList';
const App = () => {
  return (
    <View style={styles.container}>
      <CarsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
