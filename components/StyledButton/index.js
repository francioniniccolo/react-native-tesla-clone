import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';

const StyledButton = props => {
  const backgroundColor = props.type === 'primary' ? 'black' : 'white';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => {
          console.warn('Here');
        }}>
        <Text style={styles.text}>Button</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
