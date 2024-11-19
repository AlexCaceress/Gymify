import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Day } from '@/app/AppContext';
import globalStyles from '@/globalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import ImageViewer from '../ImageViewer';
import CheckBoxDaysList from '../SelectedDaysList';
import { IMAGES } from '@/utils/imagesFile';

type Props = PropsWithChildren<{
    onClose: () => void,
    deleteExercise: (index : number) => void,
    day: Day
}>;

const DayHandlerModal = ({ onClose, deleteExercise,  day }: Props) => {

    return (
        <Modal animationType="slide" transparent={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={globalStyles.modalContent}>
                    <View style={{ alignItems: "flex-end" }}>
                        <TouchableOpacity onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={32} />
                        </TouchableOpacity>
                    </View>
                    <Text style={globalStyles.title}>{day.name} exercises</Text>

                    <ScrollView>
                        <View style={styles.exercisesContainer}>

                            {day.exercises.map((exercise, index) => (
                                <View key={index} style={styles.exercise}>
                                    <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => deleteExercise(index)}>
                                        <MaterialIcons name="close" color="#fff" size={32} />
                                    </TouchableOpacity>
                                    <Image source={IMAGES[parseInt(exercise.id) - 1].image} style={styles.image} />
                                    <Text style={styles.repsText}>{exercise.series}</Text>
                                </View>
                            ))}

                        </View>
                    </ScrollView>


                </LinearGradient>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default DayHandlerModal

const styles = StyleSheet.create({
    exercisesContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap : 10
    },
    exercise: {
        width: "45%",
        backgroundColor: "#232526",
        borderRadius: 5,
        padding: 10,
        gap: 5
    },
    repsText: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: "center"
    }
})