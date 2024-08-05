import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {ITextInput} from '../../interfaces';

const Input: React.FC<any> = ({value, styles, title, containerStyle, ...props}) => {
  const debounce = React.useRef<any>(null);
  const debounceTime = 500;
  const [text, setText] = React.useState<string>(value);
  const initInputStyle = {
    borderColor: 'gray',
    borderWidth: 1,
  };

  // Debounce the input - set the value to parent component
  React.useEffect(() => {
    if (debounce.current) {
      clearTimeout(debounce.current);
      debounce.current = null;
    }
    debounce.current = setTimeout(() => {
      typeof props.onChangeText === 'function' && props?.onChangeText(text);
    }, debounceTime);
    return () => {
      clearTimeout(debounce.current);
    };
  }, [text]);

  // Set the state to input value
  React.useEffect(() => {
    if (value !== text) setText(value);
  }, [value]);

  // Return the input component
  return (
    <View style={containerStyle || {flex: 1}}>
      <Text>{title || 'Title'}</Text>
      <TextInput
        {...props}
        value={text}
        onChangeText={setText}
        style={styles || initInputStyle}
        placeholder={text || 'Type here to enter text!'}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default React.memo(Input);
