import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';

const Form = ({ navigation }) => {
    const [myValueFilm, setValueFilm] = useState('');
    return (

        <View style={styles.Container}>

            <TextInput style={styles.txtInput}
                placeholder='Entrer votre film '
                onChangeText={(value) => setValueFilm(value)}
                value={myValueFilm}

            />

            <Pressable onPress={() => {
                navigation.navigate('ListFilm', {
                    nomFilm: myValueFilm,
                })
            }}>
                <View >

                    <Text style={styles.txtBouton}>
                        Rechercher
                    </Text>

                </View>
            </Pressable>
        </View >
    );
}
//style={{ borderRadius: 15, backgroundColor: '#6CBAFC', padding: 5, top: 50 }}
const styles = StyleSheet.create({
    txtInput: {
        borderRadius: 15,
        fontWeight: 'bold',
        borderWidth: 1,
        width: 250,
        height: 60,
        color: 'white',
    },
    Container: {
        flex: 1,
        backgroundColor: '#3DA6FF',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    txtBouton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#F9DC0E',
        margin: 15,
        padding: 8,

    }
})

export default Form