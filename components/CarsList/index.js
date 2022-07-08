import React from 'react';
import {View, Text, FlatList} from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from './styles';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={car => <CarItem car={car} />} />
    </View>
  );
};

export default CarsList;
