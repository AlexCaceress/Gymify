import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Pressable, Keyboard, ScrollView, Image, TextInput } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import globalStyles from '@/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IMAGES } from "@/utils/imagesFile"
import Button from './Button';
import { Exercise } from '@/app/AppContext';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: (exercise: Exercise | undefined) => void;
}>;

const AddExerciseModal = ({ isVisible, onClose }: Props) => {

    const [exerciseId, setExerciseId] = useState<string>("");
    const [reps, setReps] = useState<number>(0);
    const [series, setSeries] = useState<number>(0);

    const closeModal = () => {
        let exercise: Exercise | undefined = undefined;

        if (exerciseId !== "" && reps !== 0 && series !== 0) {
            exercise = { id: exerciseId, series: `${series}x${reps}` }
        }

        onClose(exercise)
        setExerciseId("");
        setReps(0),
        setSeries(0)
    }


    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={globalStyles.modalContent}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable onPress={closeModal}>
                            <MaterialIcons name="close" color="#fff" size={30} />
                        </Pressable>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Select exercise</Text>
                    </View>

                    {exerciseId === "" ?
                        <ScrollView>
                            <View style={styles.exercisesContainer}>
                                {IMAGES.map(image => (
                                    <Pressable key={image.id} onPress={() => setExerciseId(image.id.toString())}>
                                        <Image style={styles.image} source={image.image} />
                                    </Pressable>
                                ))}
                            </View>
                        </ScrollView>
                        :
                        <View style={styles.secondScreenContainer}>
                            <Text style={globalStyles.title}>Series and reps</Text>
                            <View style={styles.seriesAndRepsContainer}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    onChangeText={series => setSeries(parseInt(series))}
                                />
                                <Text style={styles.title}>X</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={10}
                                    onChangeText={reps => setReps(parseInt(reps))}
                                />
                            </View>

                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <View style={[globalStyles.buttonContainer, { width: 150 }]}>
                                    <Pressable style={globalStyles.button} onPress={() => setExerciseId("")}>
                                        <Text style={[globalStyles.buttonLabel, { textAlign: "center" }]}>Select other exercise</Text>
                                    </Pressable>
                                </View>
                                <View style={[globalStyles.buttonContainer, { width: 150 }]}>
                                    <Pressable style={globalStyles.button} onPress={closeModal}>
                                        <Text style={globalStyles.buttonLabel}>Save</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    }


                </LinearGradient>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default AddExerciseModal

const styles = StyleSheet.create({
    header: {
        marginVertical : 20
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
    },
    exercisesContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 10,
        gap: 10,
        justifyContent: "space-between",
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    secondScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40
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