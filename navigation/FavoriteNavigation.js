import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavoriteScreen} from '../screens'
import { Color } from '../contains'
import { Header } from '../components'


const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = (props) => {
  return (
    <FavoriteStack.Navigator 
      screenOptions= {{
        headerStyle : {
          backgroundColor: Color.main
        },
      }}
    >
      <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{header : () => (<Header icon={'delete'}/>)}} />
    </FavoriteStack.Navigator>
  );
}

export default FavoriteStackScreen