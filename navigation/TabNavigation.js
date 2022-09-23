import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CartScreen, ProductScreen, FilterScreen, LoginScreen, InfoShipScreen, InfoSearchScreen, BuyScreen, InfoCartScreen } from '../screens'
import { Color } from '../contains';
import MyTab from './index'
import { HeaderMore, Header } from '../components'

const TabStack = createStackNavigator();

const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.main,
          elevation: 0,
          height: 1
        },
      }}
    >
      <TabStack.Screen name="MyTab" component={MyTab} options={{ title: 'Trang chủ' }} />
      <TabStack.Screen name="CartScreen" component={CartScreen} options={{ header: () => (<HeaderMore name='Cart' />) }} />
      <TabStack.Screen name="ProductScreen" component={ProductScreen} options={{ header: () => (<HeaderMore name='DetailProduct' />) }} />
      <TabStack.Screen name="FilterScreen" component={FilterScreen} options={{ header: () => (<HeaderMore name='Filter' />) }} />
      <TabStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Đăng nhập' }} />
      <TabStack.Screen name="SearchScreen" component={InfoSearchScreen} options={{ header: () => (<Header />) }} />
      <TabStack.Screen name="BuyScreen" component={BuyScreen} options={{ header: () => (<HeaderMore name='Buy' />) }} />
    </TabStack.Navigator>
  );
}
export default TabStackScreen