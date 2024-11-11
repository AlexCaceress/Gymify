import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Routine } from '@/app/AppContext';

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

type Props = {
    options : Routine
}

const RoutineBox = ({options} : Props) => {
    return (
        <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <View style={styles.infoRoutine}>
                <View style={{ flexDirection : "row", justifyContent : "space-between" }}>
                    <Text style={styles.title}>{options.name}</Text>
                    <MaterialIcons name="more-vert" size={24} color="white" />
                </View>
                <Text style={{color : "#fff"}}>{options.numDays} days</Text>
            </View>
        </View>
    )
}

export default RoutineBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        borderRadius: 20,
        flexDirection: "row",
        width: "auto",
        height: 140,
        padding: 10,
        gap: 10
    },
    image: {
        flex: 1 / 2,
        height: "auto",
        borderRadius: 10
    },
    infoRoutine: {
        flex: 1,
        gap : 5
    },
    title : {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        marginTop : 5,
    }
})