import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

type Props = {
    label : string
}
 
const Button = ({label} : Props) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
      width: 200,
      height: 60,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 20,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor : "#fff",
    },
    buttonLabel: {
      color: 'black',
      fontSize: 16,
      fontWeight : "bold"
    },
  });