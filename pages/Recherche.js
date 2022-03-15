import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Pressable, Text, Image, Vibration, TouchableOpacity } from 'react-native';
//import Voice from 'react-native-voice';
//import { TouchableOpacity } from "react-native";
//import * as Permissions from "expo-permissions";


const Form = ({ navigation }) => {

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    const PATTERN_DESC =
        Platform.OS === "android"
            ? "wait 1s, vibrate 2s, wait 3s"
            : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";


    const [myValueFilm, setValueFilm] = useState('');


    return (

        <View style={styles.Container}>

            <TextInput style={styles.txtInput}
                placeholder='Entrer votre film '
                onChangeText={(value) => setValueFilm(value)}
                value={myValueFilm}
                placeholderTextColor="white"


            />



            <TouchableOpacity onPress={() => {
                if (myValueFilm == '') {
                    alert('Il faut entrer un film !!!')
                } else {

                    Vibration.vibrate(5 * ONE_SECOND_IN_MS)
                    navigation.navigate('ListFilm', {
                        nomFilm: myValueFilm,
                    })
                }
            }}>

                <View >
                    <View >

                        <Text style={styles.txtBouton}>
                            Rechercher
                        </Text>


                    </View>
                </View>
            </TouchableOpacity >

        </View >

    );
}
//<Image style={{ width: 20, height: 20 }} source={require('../assets/microphone-forme-noire.png')}></Image>
/*<View>
<TouchableOpacity>
    <Image style={{ width: 20, height: 20 }} source={require('../assets/microphone-forme-noire.png')}></Image>
</TouchableOpacity>
</View>
*/
//style={{ borderRadius: 15, backgroundColor: '#6CBAFC', padding: 5, top: 50 }}
const styles = StyleSheet.create({
    txtInput: {
        borderRadius: 15,
        fontWeight: 'bold',
        borderWidth: 1,
        width: 250,
        height: 60,
        color: 'white',
        borderColor: 'white',
    },
    Container: {
        flex: 1,
        backgroundColor: '#212040',
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
        backgroundColor: '#97999A',
        margin: 15,
        padding: 8,

    }
})

export default Form