import { Modal, View, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { PropsWithChildren, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import CheckBoxDaysList from './CheckBoxDaysList';
import globalStyles from '@/globalStyles';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

export default function CreateRoutineModal({ isVisible, onClose }: Props) {

    const [nameRoutine, setNameRoutine] = useState<string | undefined>(undefined);

    const aviableOptions = [
        {
            id: "1",
            nameDay: "M"
        },
        {
            id: "2",
            nameDay: "T"
        },
        {
            id: "3",
            nameDay: "W"
        },
        {
            id: "4",
            nameDay: "T"
        },
        {
            id: "5",
            nameDay: "F"
        },
        {
            id: "6",
            nameDay: "S"
        },
        {
            id: "7",
            nameDay: "S"
        },
    ]

    const [selected, setSelected] = useState<string[]>([]);

    const onPressCheckbox = (id: string) => {
        
        if (selected.includes(id)) {
            const newSelected = selected.filter(item => item != id);
            setSelected(newSelected)
        } else {
            const result = [...selected, id]
            setSelected(result);
        }

    }

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={globalStyles.modalContent}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={32} />
                        </Pressable>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={PlaceholderImage} style={styles.image} />
                            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>Change Picture</Text>
                        </View>
                        <View style={styles.inputsContainer}>
                            <View style={[styles.inputSection, { flex: 1 / 2 }]}>
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
    image: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
    inputsContainer: {
        flex: 1,
        paddingTop: 70,
    },
    inputSection: {
        flex: 1,
        gap: 20,
        alignItems: "center"
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
