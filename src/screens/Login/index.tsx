import React from 'react';
import {View, Text, StyleSheet, Alert, NativeModules, Button} from 'react-native';

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
    NativeModules?.CalendarModule?.createCalendarEvent('testName', 'testLocation');
  };

  const onChangeText = (value: string) => {
    setState({...state, name: value});
  };
  const onChangePassword = (value: string) => {
    setState({...state, password: value});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', gap: 8, marginHorizontal: 16}}>
      <Text style={{fontSize: 60}}>Welcome</Text>
      <Input
        styles={styles.container}
        containerStyle={styles.containerStyle}
        text="Username"
        title="Enter your username"
        value={state.name}
        onChangeText={onChangeText}
      />

      <Input
        styles={styles.container}
        containerStyle={styles.containerStyle}
        title="Enter your password"
        text="Password"
        value={state.password}
        onChangeText={onChangePassword}
        secureTextEntry={true}
      />

      <View style={{alignItems: 'flex-start'}}>
        <ButtonComponent label="Press Me" onPress={onPress} />
      </View>
      {/* <Toast isVisible={isVisible} onClose={onPressEncrytion} /> */}
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
