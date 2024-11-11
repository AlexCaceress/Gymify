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
    buttonContainer: {
        width: 200,
        height: 60,
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
        backgroundColor: "#fff",
    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },
})

export default globalStyles;