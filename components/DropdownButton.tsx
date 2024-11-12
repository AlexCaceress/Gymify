import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

type Props = {
    deleteRoutine : () => void
}


const DropdownButton = ({deleteRoutine} : Props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleEdit = () => {
        setIsModalVisible(false);
        console.log("Edit");
    };

    const handleDelete = () => {
        setIsModalVisible(false);
        deleteRoutine();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={toggleModal}>
                <MaterialIcons name="more-vert" size={32} color="white" />
            </TouchableOpacity>

            {isModalVisible && (
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <TouchableOpacity style={styles.overlay} onPress={toggleModal}>
                        <View style={styles.dropdown}>
                            <TouchableOpacity onPress={handleEdit} style={styles.option}>
                                <Text style={styles.optionText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDelete} style={styles.option}>
                                <Text style={styles.optionText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        padding: 10,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 85,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdown: {
        width: 120,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 5,
        elevation: 5,
        marginTop: 5,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default DropdownButton;
