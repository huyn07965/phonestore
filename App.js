import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import TabStackScreen from './navigation/TabNavigation'
import { Provider } from 'react-redux'
import store from './store'
import { LogBox } from "react-native"
import { StatusBar } from 'expo-status-bar'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
])


export default function App() {

  let persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <TabStackScreen />
        </NavigationContainer>
      </PersistGate>
      <StatusBar backgroundColor='#ffffff' style="dark" />
    </Provider>
  );
}