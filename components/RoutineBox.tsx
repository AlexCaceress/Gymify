import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoutineBox = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
    </View>
  )
}

export default RoutineBox

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#1A1A1A",
        borderRadius : 20,
        flexDirection : "row",
        width : "auto",
        height : 140
    }
})