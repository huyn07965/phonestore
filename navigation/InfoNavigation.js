import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { InfoScreen, InfoShipScreen, InfoCartScreen } from '../screens'
import { Color } from '../contains'
import { Header, HeaderMore } from '../components'

const InfoStack = createStackNavigator();

const InfoStackScreen = () => {
    return (
        <InfoStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Color.main,
                    elevation: 0
                },
                headerTintColor: Color.white,
            }}
        >
            <InfoStack.Screen name="InfoScreen" component={InfoScreen} options={{ header: () => (<Header info />) }} />
            <InfoStack.Screen name="InfoShipScreen" component={InfoShipScreen} options={{ header: () => (<HeaderMore name='InfoShip' />) }} />
            <InfoStack.Screen name="InfoCartScreen" component={InfoCartScreen} options={{ header: () => (<HeaderMore name='InfoCart' />) }} />
        </InfoStack.Navigator>
    );
}
export default InfoStackScreen