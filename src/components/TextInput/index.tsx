import React from 'react';
import {StyleProp, Text, TextInput, View} from 'react-native';

const Input: React.FC<any> = ({
  text,
  styles,
  title,
  containerStyle,
  onChangeText,
}: {
  text: string;
  title: string;
  styles: StyleProp<any>;
  containerStyle: StyleProp<any>;
  onChangeText: () => void;
}) => {
  const initInputStyle = {
    // height: 40,

    borderColor: 'gray',
    borderWidth: 1,
  };
  return (
    <View style={containerStyle || {flex: 1}}>
      <Text>{title || 'Title'}</Text>
      <TextInput
        onChange={onChangeText}
        style={styles || initInputStyle}
        placeholder={text || 'Type here to enter text!'}
      />
    </View>
  );
};

export default React.memo(Input);
