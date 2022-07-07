import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import img from '../../assets/images/ModelX.jpeg';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={img} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
        <StyledButton type="secondary" />
      </View>
    </View>
  );
};

export default CarItem;
