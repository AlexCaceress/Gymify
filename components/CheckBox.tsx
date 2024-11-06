import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = PropsWithChildren<{
    nameDay?: string
    isChecked?: boolean
}>;

const CheckBox = ({ nameDay, isChecked }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nameDay}</Text>
            <View style={[styles.checkBoxContrainer]}>

                {isChecked ?
                    <AntDesign name="check" size={24} color="white" />
                    :
                    <FontAwesome6 name="add" size={24} color="white" />
                }

            </View>
        </View>

    )
}

export default CheckBox

const styles = StyleSheet.create({
    container: {
        gap: 5,
        alignItems: "center"
    },
    checkBoxContrainer: {
        width: 45,
        height: 65,
        backgroundColor: "#414345",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }

})