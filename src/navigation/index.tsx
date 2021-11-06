import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Create from '../components/screens/Create';
import Edit from '../components/screens/Edit';
import Home from '../components/screens/Home';

const navigation: React.FC = () => {
  const Stack = createNativeStackNavigator<ParamListBase>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default navigation;
