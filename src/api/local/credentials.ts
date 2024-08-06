import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInformation} from './interfaces';

// console.log(JSON.parse(credentialFile));

// Setting the key for the credentials - AsyncStorage
const CREDENTIALS_KEY = 'user_credentials';

const initData = [
  {email: 'anduy0508@gmail.com', username: 'anduy0508', password: '123456789'},
  {email: 'nguyenvana@gmail.com', username: 'nguyenvana', password: 'abc1234'},
  {email: 'lethib@gmail.com', username: 'lethib', password: '1234bca'},
];

const credentialFile = AsyncStorage.setItem(CREDENTIALS_KEY, JSON.stringify(initData));

export async function getCredentials() {
  const credentials = await AsyncStorage.getItem(CREDENTIALS_KEY);
  return credentials;
}

export async function authenticateUser(username: string, password: string): Promise<boolean> {
  try {
    const credentialsData = await AsyncStorage.getItem(CREDENTIALS_KEY);
    const users: UserInformation[] = credentialsData ? JSON.parse(credentialsData) : [];

    const user = users.find(u => u.username === username && u.password === password);
    return !!user; // Double negation converts to boolean
  } catch (error) {
    console.error('Error reading credentials:', error);
    return false;
  }
}

export async function deleteUser() {
  try {
    await AsyncStorage.removeItem(CREDENTIALS_KEY);
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
}
