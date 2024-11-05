import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '@/globalStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RoutineBox from '@/components/RoutineBox';

const RoutinesScreen = () => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Routines</Text>
                <View style={styles.icons}>
                    <MaterialIcons name="search" size={32} color="white" />
                    <AntDesign name="pluscircleo" size={26} color="white" />
                </View>
            </View>
            <View style={styles.routinesContainer}>
                <RoutineBox />
            </View>
        </SafeAreaView>
    )
}

export default RoutinesScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        paddingHorizontal : 10,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    icons: {
        gap: 15,
        flexDirection : "row"
    },
    routinesContainer : {
        flex : 1,
        padding : 10,
        paddingTop : 20
    }
})