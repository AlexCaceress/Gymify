import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '@/globalStyles'
import DayRoutine from '@/components/DayRoutine'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    id: string
}

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

const RoutineViewScreen = ({ id }: Props) => {

    const router = useRouter();

    const handleBackPress = () => {
        router.back();  // Regresa a la pantalla anterior
    };

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
                    <Text style={styles.title}>Name Routine</Text>
                    <Text style={styles.subtitle}>4 days</Text>
                </View>
            </View>

            <View style={styles.daysRoutineContainer}>
                <DayRoutine day={"Moday"} />
            </View>
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