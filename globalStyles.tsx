import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: "#25292E",
        flex: 1
    },
    title : {
        fontSize : 20,
        fontWeight : "bold",
        color : "#fff"
    },
    modalContent: {
        height: '92%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
})

export default globalStyles;