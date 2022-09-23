import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, CategoryScreen } from '../screens'
import { Color } from '../contains'
import { Header, HeaderCategory } from '../components'

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.main
        },
        headerTintColor: Color.red
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => (<Header />) }} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{ header: () => (<HeaderCategory />) }} />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen