import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RoutineBox from '@/components/RoutineBox';
import CreateRoutineModal from '@/components/CreateRoutineModal';
import { router } from 'expo-router';
import { Day, Routine, useAppContext } from '@/app/AppContext';

export type ModalRoutineData = {
    name: string,
    numDays: number,
    selections: string[],
    image: string
}

const RoutinesScreen = () => {

    const { data, storeData } = useAppContext();

    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);

    const onModalOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalClose = (routine?: ModalRoutineData) => {

        if (routine) {

            let _days: Day[] = routine.selections.map((day) => {
                return {
                    name: day,
                    exercises: []
                }
            });

            let newRoutine: Routine = {
                id: (data.length + 1).toString(),
                name: routine.name,
                numDays: routine.numDays,
                image: routine.image,
                days: _days
            }

            let routines: Routine[] = [...data];
            routines.push(newRoutine);
            storeData(routines)

        }

        setModalCreateVisible(false);
    };

    const navigateToRoutine = (id: string) => {
        router.navigate(`/routine?id=${id}`);
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Routines</Text>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={32} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="pluscircleo" size={26} color="white" onPress={onModalOpen} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.routinesContainer}>
                    {data.map(routine => (
                        <Pressable key={routine.id} onPress={() => navigateToRoutine(routine.id)}>
                            <RoutineBox options={routine} />
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
            {modalCreateVisible && (<CreateRoutineModal onClose={onModalClose}>
            </CreateRoutineModal>)}
        </View>
    )
}

export default RoutinesScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 70,
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    icons: {
        gap: 15,
        flexDirection: "row"
    },
    routinesContainer: {
        flex: 1,
        padding: 10,
        gap: 10,
    }
})