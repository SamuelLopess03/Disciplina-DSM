import { StyleSheet, Text, ColorPropType, View, TouchableHighlight, Dimensions } from 'react-native'

export default props => {
    const estilosBotoes = [styles.btn]

    if(props.duplo){
        estilosBotoes.push(styles.btnDuplo)
    }
    if(props.triplo){
        estilosBotoes.push(styles.btnTriplo)
    }
    if(props.igual){
        estilosBotoes.push(styles.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(styles.btnOper)
    }

    return(
        <TouchableHighlight onPress={ props.aoClicar }>
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#e5e5e5',
        color: '#000',
        borderWidth: 1,
        borderColor: '#777',
        textAlign: 'center',
        lineHeight: 70
    },
    btnOper: {
        color: '#fff',
        backgroundColor: '#FF8C00'
    },
    btnDuplo: {
        width: (Dimensions.get('window').width/4)*2
    },
    btnTriplo: {
        width: (Dimensions.get('window').width/4)*3
    }
})