import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 40,
        color: "black",
        marginBottom: 40,
        fontWeight: "bold"
    },
    inputAcess: {
      width: 350,
      marginBottom: 10,
      padding: 10,
      paddingLeft: 20,
      height: 50,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 20,
      marginLeft: "auto",
      marginRight: "auto",
      color: "black" 
    },
    buttonLogin: {
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 50,
        marginTop: 20
    },
    textLogin: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    textError: {
        color: "red"
    }
});

export default styles;