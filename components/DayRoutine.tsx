import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import globalStyles from '@/globalStyles'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AddExerciseModal from './AddExerciseModal';
import { Day, Exercise } from '@/app/AppContext';
import { IMAGES } from '@/utils/imagesFile';

type Props = {
    options: Day
}

const DayRoutine = ({ options }: Props) => {

    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);
    const [day, setDay] = useState<Day>(options);

    const onModalOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalClose = (exercise?: Exercise) => {

        if (exercise) {

            let newDay = {
                ...day,
                exercises: [...day.exercises, exercise]
            };
            
            setDay(newDay);

        }

        setModalCreateVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>{day.name}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.routineContianer}>

                    {day.exercises.map(exercise => (
                        <View key={exercise.id} style={styles.exerciceContainer}>
                            <Image source={IMAGES[parseInt(exercise.id) - 1].image} style={styles.image} />
                            <Text style={styles.repsText}>{exercise.series}</Text>
                        </View>
                    ))}

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