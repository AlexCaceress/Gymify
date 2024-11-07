import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '@/globalStyles'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AddExerciseModal from './AddExerciseModal';

type Props = {
    day: string
}

const PlaceholderImage = require('@/assets/images/biceps.png');

const DayRoutine = ({ day }: Props) => {

    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);


    const onModalOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalClose = () => {
        setModalCreateVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>{day}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.routineContianer}>
                    <View style={styles.exerciceContainer}>
                        <Image source={PlaceholderImage} style={styles.image} />
                        <Text style={styles.repsText}>4x10</Text>
                    </View>
                    <View style={styles.exerciceContainer}>
                        <Image source={PlaceholderImage} style={styles.image} />
                        <Text style={styles.repsText}>4x10</Text>
                    </View>

                    <Pressable style={styles.addButton} onPress={onModalOpen}>
                        <FontAwesome6 name="add" size={32} color="white" />
                    </Pressable>

                </View>
            </ScrollView>
            <View style={styles.iconsContainer}>
                <AntDesign name="playcircleo" size={32} color="white" />
                <Feather name="settings" size={32} color="white" />
            </View>
            <AddExerciseModal isVisible={modalCreateVisible} onClose={onModalClose}>
            </AddExerciseModal>
        </View>
    )
}

export default DayRoutine

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        gap: 15
    },
    routineContianer: {
        gap: 10,
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    repsText: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    },
    exerciceContainer: {
        gap: 10,
        alignSelf: "flex-start"
    },
    iconsContainer: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    addButton: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#414345"
    }

})