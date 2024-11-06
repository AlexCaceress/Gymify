import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoutineViewScreen from '@/screens/RoutineViewScreen'
import { useLocalSearchParams } from 'expo-router';


const Routine = () => {

    const { id } = useLocalSearchParams();  // Obtiene el id del parámetro de consulta

    return (
        <RoutineViewScreen id={id.toString()}/>
    )
}

export default Routine

const styles = StyleSheet.create({})