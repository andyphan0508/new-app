import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import Input from '../../components/TextInput';
import {useTheme} from '../../themes';
import ButtonComponent from '../../components/Button';
import * as localAPI from '../../api/local/credentials';

const Home = () => {
  const styles = createStyle();

  const [state, setState] = React.useState<any>({
    name: '',
    password: '',
  });
  const [data, setData] = React.useState<any>([]);
  console.log('data', data);

  const onPress = async () => {
    try {
      const data = await localAPI.getCredentials();
      setData(data);
    } catch (error) {
      console.log(error);
    }
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
      {/* <Text>{data?.find((i: any) => i.username !== state.name) ? 'Error' : ''}</Text> */}
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
