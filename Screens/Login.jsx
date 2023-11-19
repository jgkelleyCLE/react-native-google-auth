import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View className="flex-1 bg-gray-200 pt-14">
        <View className="mx-4">
            <Text className="text-2xl">Login</Text>
            
            <View>
                <TouchableOpacity className="bg-white rounded-md flex-row items-center justify-center p-1 mt-20">
                    <Image className="w-12 h-12" source={require('../assets/7123025_logo_google_g_icon.png')} />
                    <Text className="text-xl">Sign In With Google</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  )
}

export default Login