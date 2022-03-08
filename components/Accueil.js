import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const Accueil = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.txt}>Bienvenue sur mon Application </Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Recherche');
            }}>

                <View >
                    <View >

                        <Text style={styles.txtBouton}>
                            Entrer
                        </Text>


                    </View>
                </View>
            </TouchableOpacity >
        </View >

    );
};

//style={{ borderRadius: 15, backgroundColor: '#6CBAFC', padding: 5, top: 320 }}
//style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingRight: 15 }}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212040',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    txt: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
    },
    txtBouton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#97999A',
        padding: 8,
    }

});

export default Accueil