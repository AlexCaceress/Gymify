import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { Day, Exercise } from '@/app/AppContext';
import globalStyles from '@/globalStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import ImageViewer from '../ImageViewer';
import CheckBoxDaysList from '../SelectedDaysList';
import { IMAGES } from '@/utils/imagesFile';
import Feather from '@expo/vector-icons/Feather';


type Props = PropsWithChildren<{
    onClose: () => void,
    deleteExercise: (index: number) => void,
    editExercise : (day : Day) => void,
    day: Day
}>;

const DayHandlerModal = ({ onClose, deleteExercise, editExercise, day }: Props) => {

    const [exerciseId, setExerciseId] = useState<string>("");
    const [reps, setReps] = useState<number>(0);
    const [series, setSeries] = useState<number>(0);
    const [editExerciseVisibility, setEditExerciseVisibility] = useState<boolean>(false);

    const showEditExerciseScreen = (exercise: Exercise) => {

        setEditExerciseVisibility(true);
        setExerciseId(exercise.id);
        setReps(parseInt(exercise.series.split("x")[0]))
        setSeries(parseInt(exercise.series.split("x")[1]))

    }

    const saveExercise = () => {

        let newDay = {
            ...day,
            exercises: [...day.exercises]
        }

        for(let exercise of newDay.exercises){

            if(exercise.id === exerciseId){

                exercise.series = `${series}x${reps}`

            }

        }

        editExercise(newDay);
        setEditExerciseVisibility(false)

    }

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

                    {!editExerciseVisibility ?
                        <ScrollView>
                            <View style={styles.exercisesContainer}>

                                {day.exercises.map((exercise, index) => (
                                    <View key={index} style={styles.exercise}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => showEditExerciseScreen(exercise)}>
                                                <Feather name="edit-2" size={24} color="white" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => deleteExercise(index)}>
                                                <MaterialIcons name="close" color="#fff" size={32} />
                                            </TouchableOpacity>
                                        </View>
                                        <Image source={IMAGES[parseInt(exercise.id) - 1].image} style={styles.image} />
                                        <Text style={styles.repsText}>{exercise.series}</Text>
                                    </View>
                                ))}

                            </View>
                        </ScrollView>
                        :
                        <View style={styles.editExerciseContainer}>
                            <Image source={IMAGES[parseInt(exerciseId) - 1].image} style={styles.image} />
                            <View style={styles.seriesAndRepsContainer}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    onChangeText={series => setSeries(parseInt(series))}
                                    value={series.toString()}
                                />
                                <Text style={globalStyles.title}>X</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    onChangeText={reps => setReps(parseInt(reps))}
                                    value={reps.toString()}
                                />
                            </View>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <View style={[globalStyles.buttonContainer, { width: 150 }]}>
                                    <TouchableOpacity style={globalStyles.button} onPress={() => setEditExerciseVisibility(false)}>
                                        <Text style={[globalStyles.buttonLabel, { textAlign: "center" }]}>Select other exercise</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[globalStyles.buttonContainer, { width: 150 }]}>
                                    <TouchableOpacity style={globalStyles.button} onPress={saveExercise} >
                                        <Text style={globalStyles.buttonLabel}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }

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
        gap: 10
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
    },
    editExerciseContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    seriesAndRepsContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    input: {
        width: 50,
        height: 50,
        backgroundColor: "#414345",
        borderRadius: 10,
        fontSize: 20,
        color: "#fff",
        textAlign: "center"
    },
})