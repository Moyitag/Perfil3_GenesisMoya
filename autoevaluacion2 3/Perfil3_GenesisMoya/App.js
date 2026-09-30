import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from './screens/StudentScreen';
import ApiScreen from './screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Estudiante"
        screenOptions={{
          headerStyle: { backgroundColor: '#0f766e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Estudiante" component={StudentScreen} options={{ title: 'Información del estudiante' }} />
        <Stack.Screen name="Personajes" component={ApiScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
