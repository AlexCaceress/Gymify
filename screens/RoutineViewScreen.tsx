import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import DayRoutine from '@/components/DayViewContainer'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Day, Routine, useAppContext } from '@/app/AppContext';
import DropdownButton from '@/components/DropdownButton';
import ImageViewer from '@/components/ImageViewer';
import { ModalRoutineData } from './RoutinesScreen';
import CreateRoutineModal from '@/components/modals/RoutineHandlerModal';

type Props = {
    id: string
}

const RoutineViewScreen = ({ id }: Props) => {

    const { data, storeData } = useAppContext();
    const router = useRouter();
    const [routine, setRoutine] = useState<Routine>()
    const [modalCreateVisible, setModalCreateVisible] = useState<boolean>(false);

    const handleBackPress = () => {
        router.back();  // Regresa a la pantalla anterior
    };

    useEffect(() => {
        getRoutine(id);
    }, [])

    const getRoutine = (id: string) => {
        for (let item of data) {
            if (item.id === id) {
                setRoutine(item);
                return;
            }
        }

        handleBackPress();
    }

    const updateRoutine = (newDay: Day) => {

        const newDays = routine?.days?.map(day =>
            newDay.name === day.name ? { ...day, ...newDay } : day
        );

        const newRoutine = { ...routine, days: newDays } as Routine;

        const newRoutines = data.map(routine =>
            routine.id === newRoutine.id ? { ...routine, ...newRoutine } : routine
        );

        setRoutine(newRoutine); // Actualiza la vista de la rutina acutal
        storeData(newRoutines); // Guarda en el almacenamiento la acutalizacion de esa rutina
    }

    const deleteRoutine = () => {

        let newData = [...data];
        newData = newData.filter(item => { return item.id !== routine?.id });
        storeData(newData);
        handleBackPress();

    }

    const onModalOpen = () => {
        setModalCreateVisible(true);
    };

    const onModalClose = () => {
        setModalCreateVisible(false);
    }

    const editRoutine = (editedRoutine: Routine) => {

        let newData : Routine[] = data.map((item : Routine) => {
            return item.id === editedRoutine.id ? {...item, ...editedRoutine, days : editedRoutine.days ? [...editedRoutine.days] : []} : item
        });

        console.log(editedRoutine);
        setRoutine(editedRoutine);
        storeData(newData);
        
    };


    return (
        <View style={[globalStyles.container, {
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
        }]}>
            <View style={styles.iconsRoutineContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <AntDesign name="arrowleft" size={32} color="white" />
                </TouchableOpacity>
                <DropdownButton deleteRoutine={deleteRoutine} editRoutine={onModalOpen} />
            </View>
            <View >
                <View style={styles.imageContainer}>
                    <ImageViewer selectedImage={routine?.image} customStyle={styles.image} />
                </View>
                <View style={styles.infoRoutineContainer}>
                    <Text style={styles.title}>{routine?.name}</Text>
                    <Text style={styles.subtitle}>{routine?.numDays} days</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.daysRoutineContainer}>
                    {routine?.days?.map(day => (
                        <DayRoutine key={day.name} day={day} updateRoutine={updateRoutine} />
                    ))}
                </View>
            </ScrollView>

            {modalCreateVisible && (<CreateRoutineModal onClose={onModalClose} routine={routine} editRoutineHandler={editRoutine}>
            </CreateRoutineModal>)}


        </View>
    )
}

export default RoutineViewScreen

const styles = StyleSheet.create({
    iconsRoutineContainer: {
        paddingHorizontal: 10,
        paddingTop: 15,
        justifyContent: 'space-between',
        flexDirection: "row"
    },
    imageContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10
    },
    infoRoutineContainer: {
        gap: 10,
        padding: 10
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
    },
    subtitle: {
        color: "#fff",
        fontSize: 16,
    },
    daysRoutineContainer: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    }
})