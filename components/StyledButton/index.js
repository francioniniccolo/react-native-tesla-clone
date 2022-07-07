/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';

const StyledButton = () => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('Here');
        }}>
        <Text>Button</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
