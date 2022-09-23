import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackScreen from './HomeNavigation'
import FavoriteStackScreen from './FavoriteNavigation'
import InfoStackScreen from './InfoNavigation'
import CategoryStackScreen from './CategoryNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../contains'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator();

const MyTab = () => {

  const isLogin = useSelector((state) => state.Auth.isLogin)
  const favoriteItems = useSelector(state => state.Favorite.items)
  let favorite = ''

  if (!isLogin) {
    favorite = 0
  } else {
    favorite = favoriteItems.length
  }

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline'
              break;
            case 'Category':
              iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline'
              break;
            case 'Favorite':
              iconName = focused ? 'ios-heart' : 'ios-heart-outline'
              break;
            case 'Info':
              iconName = focused ? 'ios-person' : 'ios-person-outline'
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: Color.main,
        tabBarInactiveTintColor: Color.darkGray,
        tabBarStyle: {
          backgroundColor: Color.white,
          height: 47,
          paddingTop: 5,
          paddingBottom: 2
        },
        tabBarLabelStyle: {
          fontSize: 13,
          color: Color.darkGray
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Trang chủ' }} />
      <Tab.Screen name="Category" component={CategoryStackScreen} options={{ title: 'Danh mục', tabBarBadge: 'Sale', tabBarBadgeStyle: { backgroundColor: Color.main, marginTop: -5, color: Color.white } }} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{ title: 'Yêu thích', tabBarBadge: favorite, tabBarBadgeStyle: { backgroundColor: Color.main, marginTop: -5, color: Color.white } }} />
      <Tab.Screen name="Info" component={InfoStackScreen} options={{ title: 'Thông tin' }} />
    </Tab.Navigator>
  );
}

export default MyTab