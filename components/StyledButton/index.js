/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';

const StyledButton = props => {
  const backgroundColor = props.type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = props.type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => {
          props.onPress();
        }}>
        <Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
