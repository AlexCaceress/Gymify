import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '@/globalStyles'
import { SafeAreaView } from 'react-native'
import { Pressable } from 'react-native'
import Button from '@/components/Button'

const PlaceholderImage = require('@/assets/images/Grupos_Musculares/pectoral.png');

const HomeScreen = () => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={styles.title}>Monday's Routine</Text>
            <View style={styles.dayContainer}>

                <View style={styles.day}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={PlaceholderImage} />
                    </View>

                    <View style={styles.imfoContainer}>
                        <Text style={styles.h2}>Name Day</Text>
                        <Text style={styles.description}>Esta es la descripcion de la rutina para ver como queda.</Text>
                        <View style={styles.br} />
                        <Text style={styles.h2}>Muscles involved</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.musclesInvolvedContainer}>
                                <Image style={styles.muscleIcon} source={PlaceholderImage} />
                                <Image style={styles.muscleIcon} source={PlaceholderImage} />
                                <Image style={styles.muscleIcon} source={PlaceholderImage} />
                                <Image style={styles.muscleIcon} source={PlaceholderImage} />
                            </View>
                        </ScrollView>

                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <Button label="Start Day" />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#25292E",
        flex: 1
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 30,
        marginLeft: 10,
    },
    dayContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50
    },
    day: {
        backgroundColor: "#1A1A1A",
        width: 300,
        height: 450,
        borderRadius: 20,
        padding: 10
    },
    footerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 180,
        height: 180,
        marginBottom: 10
    },
    imageContainer: {
        alignItems: "center"
    },
    imfoContainer: {
        flex: 1,
        gap: 20
    },
    h2: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    description: {
        color: "#fff",
        fontSize: 14,
        opacity: 0.8
    },
    br: {
        height: 2,
        backgroundColor: "#fff"
    },
    musclesInvolvedContainer: {
        flexDirection: "row",
        gap: 10
    },
    muscleIcon: {
        width: 50,
        height: 50
    }
})