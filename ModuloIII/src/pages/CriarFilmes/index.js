import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { filmesCollectionRef } from '../../services/firebaseConfig';
import { addDoc } from 'firebase/firestore';
import styles from './styles';

export default function Filmes(){
    const navigation = useNavigation();

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [duration, setDuration] = useState(null);
    const [gender, setGender] = useState(null);
    const [releaseYear, setReleaseYear] = useState(null);

    async function addNewFilme(){
        const filme = await addDoc(filmesCollectionRef, {
            name,
            description,
            duration,
            gender,
            releaseYear
        });

        navigation.navigate("Filmes");
    }

    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Name:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: Filme Vingadores'
                onChangeText={setName}
                value={name}
            />
            <Text style={ styles.title }>Description:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: filme de super heróis...'
                onChangeText={setDescription}
                value={description}
            />
            <Text style={ styles.title }>Duration:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: 1h30min'
                onChangeText={setDuration}
                value={duration}
            />
            <Text style={ styles.title }>Gender:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: Ação, Estratégia, ...'
                onChangeText={setGender}
                value={gender}
            />
            <Text style={ styles.title }>Release Year:</Text>
            <TextInput 
                style={ styles.inputText }
                placeholder='Ex.: 2020'
                onChangeText={setReleaseYear}
                value={releaseYear}
            />

            <TouchableOpacity
                style={ styles.buttonNewFilme }
                onPress={ () => { addNewFilme() } }
            >
                <Text style={ styles.nameButton }>Save Filme</Text>
            </TouchableOpacity>
        </View>
    );
}