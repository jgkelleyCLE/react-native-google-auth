import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import { useColorScheme } from 'nativewind';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {

    const colorScheme = useColorScheme()

  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: COLORS.green500,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
            position: 'absolute',
            bottom: 24,
            marginHorizontal: 15,
            paddingTop: -5,
            paddingBottom: -5,
            borderRadius: 25
        }
         }}>
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({ focused, color }) => {
                return <Ionicons name={focused ? "home" : "home-outline"} size={30} color={color} />
            }
        }} 
        />

        <Tab.Screen 
        name="Login" 
        component={Login}
        options={{
            tabBarIcon: ({ focused, color }) => {
                return <MaterialIcons name="login" size={30} color={color} />
            }
        }}  
        />

    </Tab.Navigator>
  )
}

export default BottomTabNavigator