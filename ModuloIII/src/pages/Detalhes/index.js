import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { db } from "../../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import styles from './styles';


export default function Filmes(){
    const navigation = useNavigation();

    const route = useRoute();
    const { 
        id, name, description, duration, gender, releaseYear
    } = route.params || {};

    const idFilme = id;
    const [nameEdit, setNameEdit] = useState(name);
    const [descriptionEdit, setDescriptionEdit] = useState(description);
    const [durationEdit, setDurationEdit] = useState(duration);
    const [genderEdit, setGenderEdit] = useState(gender);
    const [releaseYearEdit, setReleaseYearEdit] = useState(releaseYear);

    async function editFilme(id){
        const filmeDoc = doc(db, "Filmes", id);
        await updateDoc(filmeDoc, {
            name: nameEdit,
            description: descriptionEdit,
            duration: durationEdit,
            gender: genderEdit,
            releaseYear: releaseYearEdit
        });

        navigation.navigate("Filmes");
    }

    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Name:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: Filme Vingadores'
                onChangeText={setNameEdit}
                value={nameEdit}
            />
            <Text style={ styles.title }>Description:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: filme de super heróis...'
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <Text style={ styles.title }>Duration:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: 1h30min'
                onChangeText={setDurationEdit}
                value={durationEdit}
            />
            <Text style={ styles.title }>Gender:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: Ação, Estratégia, ...'
                onChangeText={setGenderEdit}
                value={genderEdit}
            />
            <Text style={ styles.title }>Release Year:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: 2020'
                onChangeText={setReleaseYearEdit}
                value={releaseYearEdit}
            />

            <TouchableOpacity
                style={ styles.buttonNewFilme }
                onPress={ () => { editFilme(idFilme) } }
            >
                <Text style={ styles.nameButton }>Edit Filme</Text>
            </TouchableOpacity>
        </View>
    );
}