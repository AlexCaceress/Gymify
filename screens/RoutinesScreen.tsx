import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import RoutineBox from '@/components/RoutineContainer';
import CreateRoutineModal from '@/components/modals/RoutineHandlerModal';
import { router } from 'expo-router';
import { Day, generateId, Routine, useAppContext } from '@/app/AppContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type ModalRoutineData = {
    name: string,
    numDays: number,
    selections: string[],
    image: string,
}

const RoutinesScreen = () => {

    const { data, storeData } = useAppContext();

    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);

    const onModalCreateOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalCreateClose = () => {
        setModalCreateVisible(false);
    }

    const createRoutine = (routine: ModalRoutineData) => {

        let _days: Day[] = routine.selections.map((day) => {
            return {
                name: day,
                exercises: []
            }
        });

        let newRoutine: Routine = {
            id: generateId(),
            name: routine.name,
            numDays: routine.numDays,
            image: routine.image,
            days: _days,
            activate: false
        }

        let routines: Routine[] = [...data];
        routines.push(newRoutine);
        storeData(routines);

    };

    const changeRoutineActive = (id: string) => {

        const updatedRoutines = data.map(routine =>
            routine.id === id ? { ...routine, activate: !routine.activate } : { ...routine, activate: false }
        )

        storeData(updatedRoutines)

    }

    const navigateToRoutine = (id: string) => {
        router.navigate(`/routine?id=${id}`);
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Routines</Text>
                <View style={styles.icons}>
                    {/* <TouchableOpacity>
                        <MaterialIcons name="search" size={32} color="white" />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={onModalCreateOpen}>
                        <FontAwesome6 name="add" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.routinesContainer}>
                    {data.map(routine => (
                        <Pressable key={routine.id} onPress={() => navigateToRoutine(routine.id)}>
                            <RoutineBox options={routine} changeActive={changeRoutineActive} />
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
            {modalCreateVisible && (<CreateRoutineModal onClose={onModalCreateClose} createRoutineHandler={createRoutine}>
            </CreateRoutineModal>)}
        </View>
    )
}

export default RoutinesScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
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