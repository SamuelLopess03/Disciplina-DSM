import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

import styles from "./styles";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erroAcess, setErroAcess] = useState("");

    const navigation = useNavigation();

    function toCheckEmailAndPassword(){
        const validEmail = "filmes@gmail.com"
        const validPassword = "filmes2023"

        if(validEmail === email && validPassword === password){
            navigation.navigate("Filmes");
        }else {
            setErroAcess("Email ou Senha Inválido!");
        }
    }

    return(
        <KeyboardAvoidingView
            style={ styles.container }
        >
            <Text style={ styles.title }>Coleção de Filmes</Text>
            <TextInput 
                style={ styles.inputAcess }
                placeholder="Entre com seu Email."
                type="text"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
                style={ styles.inputAcess }
                placeholder="Entre com sua Senha."
                type="text"
                onChangeText={(senha) => setPassword(senha)}
                secureTextEntry={true}
            />

            <Text style={ styles.textError }>{erroAcess}</Text>

            <TouchableOpacity
                style={ styles.buttonLogin }
                onPress={() => { toCheckEmailAndPassword() }}
            >
                <Text style={ styles.textLogin }>Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}