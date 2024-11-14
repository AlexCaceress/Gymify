import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from './CheckBox'

type Props = {
    options: {
        id: string,
        nameDay: string
    }[],
    selectedOption?: string[],
    onPressCheckbox: (id: string) => void
}

const CheckBoxDaysList = ({ options, selectedOption, onPressCheckbox }: Props) => {
    return (
        <View style={styles.container}>
            {options.map((option) => (
                <Pressable key={option.id} onPress={() => onPressCheckbox(option.id)}>
                    <CheckBox nameDay={option.nameDay} isChecked={!!selectedOption?.includes(option.id)} />
                </Pressable>
            ))}
        </View>

    )
}

export default CheckBoxDaysList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
})