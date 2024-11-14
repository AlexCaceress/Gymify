import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '@/globalStyles'
import { SafeAreaView } from 'react-native'
import { Day, Routine, useAppContext } from '@/app/AppContext'
import ImageViewer from '@/components/ImageViewer'
import { IMAGES } from '@/utils/imagesFile'

const RoutineIcon = require('@/assets/images/routine.png');

const HomeScreen = () => {

    const { data } = useAppContext();
    const [activeRoutine, setActiveRoutine] = useState<Routine | undefined>()
    const [todaysDay, setTodaysDay] = useState<Day | undefined>()
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const today = daysOfWeek[new Date().getDay()];

    useEffect(() => {

        getActiveRoutine();

    }, [data]);

    const getActiveRoutine = () => {

        const activatedRoutine = data.find(routine =>
            routine.activate
        );

        setActiveRoutine(activatedRoutine)

        getDayRoutine(activatedRoutine)

    }

    const getDayRoutine = (activatedRoutine: Routine | undefined) => {

        let todayRoutine: Day | undefined = undefined

        if (activatedRoutine) {

            todayRoutine = activatedRoutine.days?.find((day) =>
                day.name === today
            );
        }

        setTodaysDay(todayRoutine)

    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={[styles.title, { marginTop: 30, marginLeft: 10, }]}>{today} Routine</Text>

            {activeRoutine ?
                <View style={styles.dayContainer}>
                    <View style={styles.day}>
                        <View style={styles.imageContainer}>
                            <ImageViewer customStyle={styles.image} selectedImage={activeRoutine?.image} />
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={{ gap: 10, flex: 1 / 2 }}>
                                <Text style={styles.h2}>{activeRoutine?.name}</Text>
                                <Text style={styles.h2}>{activeRoutine?.numDays} days</Text>

                                <View style={styles.br} />
                            </View>

                            <View style={{ flex: 1, justifyContent: "center" }}>

                                {todaysDay && todaysDay.exercises.length > 0 ?

                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={{ gap: 10, flexDirection: "row" }}>

                                            {todaysDay.exercises.map((exercise, index) => (
                                                <View key={index} style={styles.exerciceContainer}>
                                                    <Image
                                                        source={IMAGES[parseInt(exercise.id) - 1].image}
                                                        style={{
                                                            width: 100,
                                                            height: 100,
                                                            borderRadius: 10
                                                        }}
                                                    />
                                                    <Text style={styles.repsText}>{exercise.series}</Text>
                                                </View>
                                            ))}
                                        </View>


                                    </ScrollView>


                                    :

                                    <Text style={[styles.title, { textAlign: "center" }]}>Rest Day!</Text>

                                }


                            </View>

                        </View>


                    </View>

                    <View style={styles.footerContainer}>

                        <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
                            <Text style={styles.buttonLabel}>Start day</Text>
                        </TouchableOpacity>

                    </View>
                </View>


                :


                <View style={styles.notRoutinesStyle}>
                    <Text style={[styles.title, { fontSize: 25, textAlign: "center" }]}>You do not have selected routines</Text>
                    <Image style={{ width: 230, height: 230 }} source={RoutineIcon} />
                </View>


            }


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
    },
    dayContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    day: {
        backgroundColor: "#1A1A1A",
        width: 300,
        height: 450,
        borderRadius: 20,
        padding: 10
    },
    footerContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 170,
        height: 170,
        marginVertical: 20
    },
    imageContainer: {
        alignItems: "center"
    },
    infoContainer: {
        flex: 1,
    },
    h2: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    br: {
        height: 2,
        backgroundColor: "#fff"
    },
    repsText: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    },
    exerciceContainer: {
        gap: 10,
        justifyContent: "center"
    },
    notRoutinesStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 50
    },
    button: {
        borderRadius: 20,
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#fff",
    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },
})