import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import DayRoutine from '@/components/DayRoutine'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Routine, useAppContext } from '@/app/AppContext';

type Props = {
    id: string
}

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

const RoutineViewScreen = ({ id }: Props) => {

    const { data, storeData } = useAppContext();
    const router = useRouter();
    const [routine, setRoutine] = useState<Routine>()

    const handleBackPress = () => {
        router.back();  // Regresa a la pantalla anterior
    };

    useEffect(() => {
        getRoutine(id);
    }, [])

    const getRoutine = (id: string) => {
        for (let item of data) {
            if (item.id === id) {
                setRoutine(item);
                return;
            }
        }

        handleBackPress();
    }

    return (
        <View style={[globalStyles.container, {
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
        }]}>
            <View style={styles.iconsRoutineContainer}>
                <Pressable onPress={handleBackPress}>
                    <AntDesign name="arrowleft" size={32} color="white" />
                </Pressable>
                <Pressable>
                    <MaterialIcons name="more-vert" size={32} color="white" />
                </Pressable>
            </View>
            <View >
                <View style={styles.imageContainer}>
                    <Image source={PlaceholderImage} style={styles.image} />
                </View>
                <View style={styles.infoRoutineContainer}>
                    <Text style={styles.title}>{routine?.name}</Text>
                    <Text style={styles.subtitle}>{routine?.numDays}</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.daysRoutineContainer}>
                    {routine?.days?.map(day => (
                        <DayRoutine day={day} />
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}

export default RoutineViewScreen

const styles = StyleSheet.create({
    iconsRoutineContainer: {
        paddingHorizontal: 10,
        paddingTop: 15,
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 20
    },
    infoRoutineContainer: {
        gap: 10,
        padding: 10
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
    },
    subtitle: {
        color: "#fff",
        fontSize: 16,
    },
    daysRoutineContainer: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    }
})