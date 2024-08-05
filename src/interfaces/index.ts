import {StyleProp, TextProps} from 'react-native';

export interface ITextInput extends TextProps {
  text: string;
  title: string;
  value: string;
  styles: StyleProp<any>;
  containerStyle: StyleProp<any>;
  onChangeText: () => void;
}
