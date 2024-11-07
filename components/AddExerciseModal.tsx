import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Pressable, Keyboard, ScrollView, Image } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import globalStyles from '@/globalStyles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {IMAGES} from "@/utils/imagesFile"

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

const AddExerciseModal = ({ isVisible, onClose }: Props) => {

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient colors={['#414345', '#232526']} style={globalStyles.modalContent}>
                    <View style={{ alignItems: "flex-end" }}>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={30} />
                        </Pressable>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Select exercise</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.exercisesContainer}>
                            {IMAGES.map(image => (
                                <Pressable key={image.id}>
                                    <Image style={styles.image} source={image.image} />
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>
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
        gap : 10,
        justifyContent : "space-between"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
})