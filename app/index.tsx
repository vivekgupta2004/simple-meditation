import { View, Text, ImageBackground, SafeAreaView, } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import beachImage from "@/assets/meditation-images/beach.webp"

import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'

const App = () => {
  const router = useRouter()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className='flex-1 '>
        <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
          <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
            

              <SafeAreaView className='flex-1 px-1 justify-between'>
                <View>
                  <Text className='text-center text-white font-bold text-4xl'>
                    Simple Meditation
                  </Text>
                  <Text className='text-center text-white text-regular text-2xl mt-3'>
                    Simplifying Meditation for Everyone
                  </Text>
                </View>

                <View>
                  <CustomButton onPress={() => router.push('/nature-meditate')} title="Get Started" />

                </View>

                <StatusBar style='light' />
              </SafeAreaView>
            
          </AppGradient>
        </ImageBackground>

      </View>
    </GestureHandlerRootView>
  )
}

export default App