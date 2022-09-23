import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CategoryAll } from '../screens'
import { Color } from '../contains'
import { Header } from '../components'

const CategoryStack = createStackNavigator();

const CategoryStackScreen = () => {
  return (
    <CategoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.main
        },
        headerTintColor: Color.red
      }}
    >
      <CategoryStack.Screen name="CategoryScreen" component={CategoryAll} options={{ header: () => (<Header icon={'sort'} />) }} />
    </CategoryStack.Navigator>
  );
}
export default CategoryStackScreen