import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ItemBook({ author, title, url, rate }) {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>Autor: {author}</Text>
            <Text style={styles.content}>Título: {title}</Text>
            <Text style={styles.content}>Url: {url}</Text>
            <Text style={styles.content}>
                Pontuação:
                {rate >= 1 ? ( <Icon name='star' style={styles.star} /> ) : ( <Icon name='star-o' style={styles.star} />) }
                {rate >= 2 ? ( <Icon name='star' style={styles.star} /> ) : ( <Icon name='star-o' style={styles.star} />) }
                {rate >= 3 ? ( <Icon name='star' style={styles.star} /> ) : ( <Icon name='star-o' style={styles.star} />) }
                {rate >= 4 ? ( <Icon name='star' style={styles.star} /> ) : ( <Icon name='star-o' style={styles.star} />) }
                {rate >= 5 ? ( <Icon name='star' style={styles.star} /> ) : ( <Icon name='star-o' style={styles.star} />) }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        borderColor: "black",
        borderWidth: 2,
        padding: 20,
        paddingBottom: 30,
        marginBottom: 20,
        width: "100%",
        borderRadius: 20
    },
    content: {
        fontSize: 20,
        padding: 5,
        color: "black"
    },
    star: {
        color: "orange",
        fontSize: 18,
    }
})