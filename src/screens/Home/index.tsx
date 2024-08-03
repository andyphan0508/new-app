import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import Input from '../../components/TextInput';
import {useTheme} from '../../themes';
import ButtonComponent from '../../components/Button';

const Home = () => {
  const styles = createStyle();
  const [state, setState] = React.useState<any>({
    name: '',
    password: '',
  });

  const onPress = () => {
    Alert.alert('Button pressed');
  };

  const onChangeText = type => value => {
    setState({...state, [type]: value});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', gap: 8}}>
      <Text style={{fontSize: 60}}>Welcome</Text>
      <Input
        styles={styles.container}
        containerStyle={styles.containerStyle}
        text="Username"
        title="Enter your username"
        value={state.text}
        onChangeText={onChangeText('name')}
      />
      <Input
        styles={styles.container}
        containerStyle={styles.containerStyle}
        title="Enter your password"
        text="Password"
        value={state.text}
        onChangeText={onChangeText('password')}
      />

      <View style={{alignItems: 'flex-start'}}>
        <ButtonComponent label="" onPress={onPress} />
      </View>
    </View>
  );
};

const createStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'grey',
    },
    containerStyle: {},
  });
};

export default Home;
