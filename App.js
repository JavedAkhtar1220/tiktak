import React from 'react';
import { useSelector } from 'react-redux';

// Navigation  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages 
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {

  const selector = useSelector(state => state.isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {selector ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
          </>

        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Reset" component={ForgetPassword} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App