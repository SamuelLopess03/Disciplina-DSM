import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20
    },
    containerFilme: {
        width: "90%",
        flexDirection: "column",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20
    },
    updateFilme: {
        justifyContent: "center",
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "blue",
        borderRadius: 10,
        marginRight: 10
    },
    deleteFilme: {
        justifyContent: "center",
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "red",
        borderRadius: 10,
        marginRight: 10
    },
    nameFilme: {
        width: "90%",
        alignContent: "center",
        backgroundColor: "#ddd",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: "auto",
        marginLeft: "auto",
        color: "black"
    },
    descriptionFilme: {
        width: "90%",
        alignContent: "center",
        backgroundColor: "#ddd",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: "auto",
        marginLeft: "auto",
        color: "black"
    },
    boxButtons: {
        flexDirection: "row",
        width: "30%",
        position: "relative",
        left: 230,
        marginTop: 5
    },
    boxButtonsBottom:{
        flexDirection: "row",
        height: 100,
        width: "80%",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNovoFilme: {
        backgroundColor: "#20E369",
        width: "50%",
        height: 70,
        padding: 12,
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 1.2,
        justifyContent: "center",
        alignItems: "center"
    },
    addButton: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonLogOut: {
        backgroundColor: "red",
        width: "20%",
        height: 60,
        padding: 12,
        borderRadius: 50,
        borderColor: "#ccc",
        borderWidth: 1.2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    }
})

export default styles;