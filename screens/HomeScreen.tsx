import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '@/globalStyles'
import { SafeAreaView } from 'react-native'
import { Pressable } from 'react-native'
import Button from '@/components/Button'

const HomeScreen = () => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={styles.title}>Monday's Routine</Text>
            <View style={styles.dayContainer}>
                
                <View style={styles.day}>

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
        justifyContent : "center",
        paddingTop : 50
    },
    day: {
        backgroundColor: "#1A1A1A",
        width: 300,
        height: 450,
        borderRadius: 20,
    },
    footerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent : "center"
    }
})