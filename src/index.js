import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import HomeProgress from './pages/HomeProgress';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeProgress" component={HomeProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
