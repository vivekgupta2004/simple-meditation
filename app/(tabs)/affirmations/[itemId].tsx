import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallary';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<String[]>([]);

    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationsData.find((a) =>
                a.id === Number(itemId)
            );
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                const affirmationsArray = affirmationToStart.text.split(".");

                if (affirmationsArray[affirmationsArray.length - 1] === '') {
                    affirmationsArray.pop();
                }
                setSentences(affirmationsArray)
                return
            }
        }
    }, [])

    return (
        <View className='flex-1'>
            <ImageBackground source={affirmation?.image}
                resizeMode="cover"
                className='flex-1'>

                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name="leftcircleo" size={50} color="white" />

                    </Pressable>

                    <ScrollView className='mt-28' showsVerticalScrollIndicator={false}>
                        <View className='h-full justify-center '>

                            <View className='h-4/5 justify-center'>
                                {sentences.map((senteces, idx) => (

                                    <Text key={idx} className='text-white text-3xl mb-12 font-bold text-center'>{senteces}.</Text>
                                ))}
                            </View>
                        </View>

                    </ScrollView>
                </AppGradient>
            </ImageBackground>

        </View>
    )
}

export default AffirmationPractice