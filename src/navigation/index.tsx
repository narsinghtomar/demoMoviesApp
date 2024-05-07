import React, { useRef } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import { AuthNavigator, HomeNavigator } from './StackNavigator'
import { useSelector } from 'react-redux'

interface AppNavigatorProps {
  setNavigationRef: (ref: NavigationContainerRef | null) => void
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ setNavigationRef }) => {
  const globalNavigationRef = useRef<NavigationContainerRef | null>(null)

  const authReducer = useSelector((state: any) => state.authReducer)
  const { isAuthDone } = authReducer || {}

  const getNavigationStack = () => {
    if (isAuthDone) {
      return <HomeNavigator />
    } else {
      return <AuthNavigator />
    }
  }

  return (
    <NavigationContainer
      ref={(navigationRef) => {
        setNavigationRef(navigationRef)
        if (navigationRef) {
          globalNavigationRef.current = navigationRef
        }
      }}
    >
      {getNavigationStack()}
    </NavigationContainer>
  )
}

export default AppNavigator
