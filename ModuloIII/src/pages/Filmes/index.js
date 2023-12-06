import React, { useState, useCallback } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { filmesCollectionRef, db } from "../../services/firebaseConfig";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import styles from './styles'

export default function Filmes(){
    const [filmes, setFilmes] = useState([]);

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            const getFilmes = async () => {
                const data = await getDocs(filmesCollectionRef);
                console.log(data);
    
                setFilmes(
                    data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
    
                console.log(filmes);
            };
            
            getFilmes();
        }, [])
    );

    async function deleteFilme(id){
        const filmeDoc = doc(db, "Filmes", id);
        await deleteDoc(filmeDoc);
    }

    const ContainerFilme = ({ item }) => (
        <View style={ styles.containerFilme }>
            <View>
                <Text 
                    style={ styles.nameFilme }
                >
                    Name: {item.name}
                </Text>
                <Text 
                    style={ styles.descriptionFilme }
                >
                    Description: {item.description}
                </Text>
            </View>
            <View style={ styles.boxButtons }>
                <TouchableOpacity
                    style={ styles.updateFilme }
                    onPress={ () => { navigation.navigate("Detalhes", { ...item }) } }
                >
                    <Icon name="pencil" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.deleteFilme }
                    onPress={ () => { deleteFilme(item.id) } }
                >
                    <Icon name="trash" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );

    function logOut(){
        navigation.navigate("Login");
    }

    return(
        <View style={ styles.container }>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={filmes}
                renderItem={({ item }) => <ContainerFilme item={item} /> }
            />
            <View style={ styles.boxButtonsBottom } >
                <TouchableOpacity 
                    style={ styles.buttonNovoFilme }
                    onPress={ () => navigation.navigate("Criar Filme") }
                >
                    <Text style={ styles.addButton }>Add +</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.buttonLogOut }
                    onPress={ () => { logOut() } }
                >
                    <Icon 
                        name="sign-out"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}