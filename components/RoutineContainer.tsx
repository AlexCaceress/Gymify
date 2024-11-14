import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Routine, useAppContext } from '@/app/AppContext';
import DropdownButton from './DropdownButton';
import ImageViewer from './ImageViewer';

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

type Props = {
    options: Routine,
    changeActive : (id : string) => void
}

const RoutineBox = ({ options, changeActive }: Props) => {

    return (
        <View style={styles.container}>
            <ImageViewer selectedImage={options.image} customStyle={styles.image} />
            <View style={styles.infoRoutine}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.title}>{options.name}</Text>
                    </View>
                    <Text style={{ color: "#fff" }}>{options.numDays} days</Text>
                </View>
                <TouchableOpacity style={[!options.activate ? styles.defaultActive : styles.active]} onPress={() => changeActive(options.id)}>
                    <Text style={{ color: "#fff" }}>
                        {options.activate ? 'Desactivate routine' : 'Activate Routine'}
                    </Text>
                </TouchableOpacity>
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
        gap: 5
    },
    title: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        marginTop: 5,
    },
    defaultActive: {
        backgroundColor: "#414345",
        padding: 8,
        alignSelf: "flex-start",
        borderRadius: 10
    },
    active: {
        backgroundColor: "#28b463",
        padding: 8,
        alignSelf: "flex-start",
        borderRadius: 10
    }
})