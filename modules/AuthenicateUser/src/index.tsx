import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function AuthenicateUser({}: {}) {
  // Setting the key for the credentials - AsyncStorage
  const CREDENTIAL_KEY = 'user_credentials';

  const initData = [{email: '', username: '', password: ''}];

  const initialData = AsyncStorage.setItem(CREDENTIAL_KEY, JSON.stringify(initData));

  const [state, setState] = React.useState({});
  const [error, setError] = React.useState(false);
}
