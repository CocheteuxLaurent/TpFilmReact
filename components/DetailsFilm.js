import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DetailsFilm = ({ route }) => {
    const { imdbID } = route.params;
    console.log(imdbID);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=5edd8232`;

    useEffect(() => {

        const recupDetails = async () => {
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
                setLoading(false);
                console.log(dataJson);

            } catch (e) {
                console.log(e);
                setLoading(true)
            }
        }
        recupDetails();
    }, []);

    return (

        <View style={styles.container}>
            {isLoading ?
                <Text> Patienter les informations arrivent...</Text> :
                <View>

                    <Image style={styles.poster} source={{ uri: `${data.Poster}` }} resizeMode='contain'></Image>

                    <Text>{data.Title}</Text>

                </View>

            }


        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //backgroundColor: '#3DA6FF',
    },
    poster: {
        height: 250,
        borderRadius: 10,
        margin: 20,
    },
    text: {
        padding: 10,
        alignItems: "center",
    }
})

export default DetailsFilm