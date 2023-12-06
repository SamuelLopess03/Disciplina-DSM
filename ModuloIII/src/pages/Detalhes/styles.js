import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        width: 100,
        marginTop: 10,
        marginLeft: 20,
        fontSize: 18,
        color: 'black'
    },
    inputText: {
        width: "90%",
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10
    },
    buttonNewFilme: {
        backgroundColor: "#20E369",
        width: "50%",
        padding: 12,
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 1.2,
        position: "absolute",
        bottom: 30,
        left: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    nameButton: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default styles;