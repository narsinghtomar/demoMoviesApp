import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LOGIN_PAGE_ROUTE, MOVIESLIST_PAGE_ROUTE } from '../routes'
import { LoginPage, MoviesListPage } from '../../containers'

/**
 * AuthNavigator
 */
export const AuthNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={LOGIN_PAGE_ROUTE}
    >
      <Stack.Screen name={LOGIN_PAGE_ROUTE} component={LoginPage} />
    </Stack.Navigator>
  )
}

/**
 * HomeNavigator
 */
export const HomeNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={MOVIESLIST_PAGE_ROUTE}
    >
      <Stack.Screen name={MOVIESLIST_PAGE_ROUTE} component={MoviesListPage} />
    </Stack.Navigator>
  )
}
