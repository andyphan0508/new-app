import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity, StyleProp} from 'react-native';
import {Button} from 'react-native-paper';
import color from '../../themes/color';

const ButtonComponent: React.FC<any> = ({
  onPress,
  label,
  buttonStyle,
}: {
  onPress: () => void;
  label: string;
  buttonStyle: StyleProp<any>;
}) => {
  const styles = createStyle();
  return (
    <Button onPress={onPress} style={buttonStyle || styles.button} textColor={color.colors.light.white}>
      {label || 'Button'}
    </Button>
  );
};

const createStyle = () => {
  return StyleSheet.create({
    button: {
      backgroundColor: color.colors.light.primary500,
      borderRadius: 4,
      justifyContent: 'center',
      width: '100%',
      marginTop: 8,
      flexDirection: 'row',
    },
  });
};

export default ButtonComponent;
