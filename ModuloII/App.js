import { 
  StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity
 } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import axios from 'axios';

import ItemBook from './src/components/ItemBook'

export default function App() {
  const [search, setSearch] = useState('')
  const [listBooks, setBooks] = useState([])

  const addSearch = (text) => {
    setSearch(text)
  }

  const searchRequest = () => {
    axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
    .then((response) => { setBooks(Object.values(response.data.hits)); })
    .catch((error) => { console.log(error.message)})
  }

  const renderBook = ( book ) => {
    const rate = (book.points)/1000; // Necessário para pegar um número decimal entre 0.0 e 10.0

    return <ItemBook author={book.author} title={book.title} url={book.url} rate={rate} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Obras</Text>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => addSearch(text)}
          value={search}
          placeholder="Informe alguma obra para pesquisar"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={searchRequest}>
          <Icon name='search' size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView style={ { marginTop: 15, marginBottom: 15, padding: 20 } }>
        {listBooks.map(livro => renderBook(livro))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 60
  },
  title: {
    fontSize: 30,
    color: "black",
    backgroundColor: "#fff",
    textTransform: "uppercase",
    padding: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1.5
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 20
  },
  searchBtn: {  
    backgroundColor: "#fff",
    padding: 10,
    width: 70,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10
  }
});
