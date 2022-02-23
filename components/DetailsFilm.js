import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DetailsFilm = ({ route }) => {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <View><Image style={styles.poster} source={{ uri: `${data.Poster}` }} resizeMode='contain'></Image></View>
            <View style={styles.text}>
                <Text>{data.Title}</Text>
            </View>
            <View style={styles.text}>
                <Text>{data.Year}</Text>
            </View>
            <View style={styles.text}>
                <Text>{data.Type}</Text>
            </View>
            <View style={styles.text}>
                <Text>{data.Actors}</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        //justifyContent: 'center',
        //backgroundColor: '#3DA6FF',
    },
    poster: {
        height: 250,
        borderRadius: 10,
    },
    text: {
        padding: 10,
        alignItems: "center",
    }
})

export default DetailsFilm