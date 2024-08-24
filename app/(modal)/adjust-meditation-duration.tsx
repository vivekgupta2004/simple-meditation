import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
    const {setDuration} = useContext(TimerContext)

    const handlePress =(duration:number) =>{
        setDuration(duration)
        router.back();
    }
    return (
        <View className='flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <Text>Test</Text>
                <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                    <AntDesign name="leftcircleo" size={50} color="white" />

                </Pressable>
                <View className='justify-center h-4/5 mt-16 '>
                    <Text className='text-center font-bold text-3xl text-white mb-8'>Adjust your meditate duration</Text>
                    <GestureHandlerRootView className='justify-center '>
                        <View>
                            <CustomButton title='10 seconds' onPress={() => handlePress(10)} containerStyles='mb-5'
                            />
                        </View>
                        <View>
                            <CustomButton title='5 minutes' onPress={() => handlePress(5*60)} containerStyles='mb-5'
                            />
                        </View>
                        <View>
                            <CustomButton title='10 minutes' onPress={() => handlePress(10*60)} containerStyles='mb-5'
                            />
                        </View>
                        <View>
                            <CustomButton title='15 minutes' onPress={() => handlePress(15*60)} containerStyles='mb-5'
                            />
                        </View>
                      
                    </GestureHandlerRootView>

                </View>

            </AppGradient>

        </View>
    )
}

export default AdjustMeditationDuration