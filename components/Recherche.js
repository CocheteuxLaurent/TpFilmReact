import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Pressable, Text, Image } from 'react-native';
import Voice from 'react-native-voice';

const Form = ({ navigation }) => {
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);
    const [myValueFilm, setValueFilm] = useState('');


    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        return () => {
            //destroy the process after switching the screen
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, [])

    const onSpeechStart = (e) => {
        //Invoked when .start() is called without error
        console.log('onSpeechStart: ', e);
        setStarted('√');
    };

    const onSpeechEnd = (e) => {
        //Invoked when SpeechRecognizer stops recognition
        console.log('onSpeechEnd: ', e);
        setEnd('√');
    };

    const onSpeechError = (e) => {
        //Invoked when an error occurs.
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };

    const onSpeechResults = (e) => {
        //Invoked when SpeechRecognizer is finished recognizing
        console.log('onSpeechResults: ', e);
        setResults(e.value);
    };

    const onSpeechPartialResults = (e) => {
        //Invoked when any results are computed
        console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value);
    };

    const onSpeechVolumeChanged = (e) => {
        //Invoked when pitch that is recognized changed
        console.log('onSpeechVolumeChanged: ', e);
        setPitch(e.value);
    };
    const startRecognizing = async () => {
        //Starts listening for speech for a specific locale
        try {
            await Voice.start('en-US');
            setPitch('');
            setError('');
            setStarted('');
            setResults([]);
            setPartialResults([]);
            setEnd('');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const stopRecognizing = async () => {
        //Stops listening for speech
        try {
            await Voice.stop();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const cancelRecognizing = async () => {
        //Cancels the speech recognition
        try {
            await Voice.cancel();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const destroyRecognizer = async () => {
        //Destroys the current SpeechRecognizer instance
        try {
            await Voice.destroy();
            setPitch('');
            setError('');
            setStarted('');
            setResults([]);
            setPartialResults([]);
            setEnd('');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };


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
            <Image style={{ width: 50, height: 50 }} source={require('../assets/microphone-forme-noire.png')}></Image>
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