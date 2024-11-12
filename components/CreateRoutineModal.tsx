import { Modal, View, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { PropsWithChildren, useEffect, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import CheckBoxDaysList from './CheckBoxDaysList';
import globalStyles from '@/globalStyles';
import { Routine } from '@/app/AppContext';
import { ModalRoutineData } from '@/screens/RoutinesScreen';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './ImageViewer';


type Props = PropsWithChildren<{
    onClose: (data?: ModalRoutineData) => void;
    routine?: Routine
}>;


export default function CreateRoutineModal({ onClose, routine }: Props) {

    const [nameRoutine, setNameRoutine] = useState<string>("");
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string>("");

    const aviableOptions = [
        {
            id: "Monday",
            nameDay: "M"
        },
        {
            id: "Tuesday",
            nameDay: "T"
        },
        {
            id: "Wednesday",
            nameDay: "W"
        },
        {
            id: "Thursday",
            nameDay: "T"
        },
        {
            id: "Friday",
            nameDay: "F"
        },
        {
            id: "Saturday",
            nameDay: "S"
        },
        {
            id: "Sunday",
            nameDay: "S"
        },
    ]

    useEffect(() => {

        if (routine) {

            setSelectedImage(routine.image);

            let daysSelected = routine.days?.map(day => {
                return day.name;
            })

            setSelected(daysSelected ? daysSelected : [])

        }

    }, []);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }

    }

    const onPressCheckbox = (id: string) => {

        if (selected.includes(id)) {
            const newSelected = selected.filter(item => item != id);
            setSelected(newSelected)
        } else {
            const result = [...selected, id]
            setSelected(result);
        }

    }

    const createRoutine = () => {
        let data: ModalRoutineData | undefined = undefined
        if (nameRoutine && selected.length > 0) {
            data = { name: nameRoutine, numDays: selected.length, selections: selected, image: selectedImage }
        }
        onClose(data);
    }

    const closeModal = () => {
        onClose(undefined);
    }

    return (
        <Modal animationType="slide" transparent={true}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={globalStyles.modalContent}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable onPress={closeModal}>
                            <MaterialIcons name="close" color="#fff" size={32} />
                        </Pressable>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <ImageViewer selectedImage={selectedImage} />
                            <Pressable onPress={pickImageAsync}>
                                <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>Change Picture</Text>
                            </Pressable>
                        </View>
                        <View style={styles.inputsContainer}>
                            <View style={[styles.inputSection]}>
                                <Text style={styles.title}>Name Routine</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Type here to translate!"
                                    onChangeText={newText => setNameRoutine(newText)}
                                />
                            </View>
                            <View style={styles.inputSection}>
                                <Text style={styles.title}>Days Routine</Text>

                                <CheckBoxDaysList options={aviableOptions} selectedOption={selected} onPressCheckbox={onPressCheckbox} />
                            </View>
                            <View style={{ height: 60, alignItems: "center" }}>
                                <Pressable style={[globalStyles.button, { width: 200 }]} onPress={createRoutine}>
                                    <Text style={[globalStyles.buttonLabel, { textAlign: "center" }]}>Save</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        flex: 1
    },
    imageContainer: {
        flex: 1 / 2,
        gap: 20,
        alignItems: "center",
    },
    inputsContainer: {
        flex: 1,
        justifyContent: "space-around"
    },
    inputSection: {
        gap: 20,
        alignItems: "center",
    },
    input: {
        borderBottomWidth: 2,
        borderColor: "#fff",
        fontSize: 20,
        color: "#fff",
        height: 40,
        width: "80%"
    }
});
