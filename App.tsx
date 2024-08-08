/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/screens/Login';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppScreen from './src/navigations';

// Initialize Native Stack
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  return (
    <View>
      {/* <AppScreen /> */}
      <Button
        title={'Press Me'}
        onPress={() => {
          NativeModules === null
            ? NativeModules?.CalendarModule?.createCalendarEvent('hello', 'world')
            : console.log('NativeModules not found');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
