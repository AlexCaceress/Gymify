import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AddExerciseModal from './modals/ExerciseHandlerModal';
import { Day, Exercise, useAppContext } from '@/app/AppContext';
import { IMAGES } from '@/utils/imagesFile';
import routine from '@/app/routine';
import DayHandlerModal from './modals/DayHandlerModal';

type Props = {
    day: Day
    updateRoutine: (day: Day) => void
}

const DayRoutine = ({ day, updateRoutine }: Props) => {

    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);
    const [modalDayHandlerVisible, setModalDayHandlerVisible] = useState<boolean>(false);

    useEffect(() => {
        console.log(day)
    })

    const onModalDayHandlerOpen = () => {
        setModalDayHandlerVisible(true);
    };

    const onModalDayHandlerClose = () => {
        setTimeout(() => setModalDayHandlerVisible(false), 200);
    }

    const onModalCreateOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalCreateClose = (exercise?: Exercise) => {

        if (exercise) {

            let newDay = {
                ...day,
                exercises: [...day.exercises, exercise]
            };

            updateRoutine(newDay);

        }

        setModalCreateVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>{day.name}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.routineContianer}>

                    {day.exercises.map((exercise, index) => (
                        <View key={index} style={styles.exerciceContainer}>
                            <Image source={IMAGES[parseInt(exercise.id) - 1].image} style={styles.image} />
                            <Text style={styles.repsText}>{exercise.series}</Text>
                        </View>
                    ))}

                    <Pressable style={styles.addButton} onPress={onModalCreateOpen}>
                        <FontAwesome6 name="add" size={32} color="white" />
                    </Pressable>

                </View>
            </ScrollView>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <AntDesign name="playcircleo" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onModalDayHandlerOpen}>
                    <Feather name="settings" size={32} color="white" />
                </TouchableOpacity>
            </View>
            <AddExerciseModal isVisible={modalCreateVisible} onClose={onModalCreateClose}>
            </AddExerciseModal>

            {modalDayHandlerVisible && (<DayHandlerModal day={day} onClose={onModalDayHandlerClose}>
            </DayHandlerModal>)}
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