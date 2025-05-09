import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SurveyScreen from '../screens/SurveyScreen';
import AuthScreen from '../screens/AuthScreen';
import { MainNavigator } from './MainNavigator';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  // You can add logic here to check if user is authenticated, onboarding complete, etc.
  // For now, always show onboarding flow first
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Survey" component={SurveyScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator; 