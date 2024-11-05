import { Modal, View, Text, Pressable, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { PropsWithChildren, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

export default function CreateRoutineModal({ isVisible, onClose }: Props) {

    const [nameRoutine, setNameRoutine] = useState<string | undefined>(undefined);

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={styles.modalContent}>
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
                            <View style={[styles.inputSection, {flex : 1/2}]}>
                                <Text style={styles.title}>Name Routine</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Type here to translate!"
                                    onChangeText={newText => setNameRoutine(newText)}
                                />
                            </View>
                            <View style={styles.inputSection}>
                                <Text style={styles.title}>Days Routine</Text>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: '92%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
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
        flex : 1,
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
