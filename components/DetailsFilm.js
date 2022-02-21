import React from "react";
import { Text, View } from "react-native";

const DetailsFilm = ({ route }) => {
    const { data } = route.params;

    return (
        <View>
            <Text>{data.Year}</Text>
        </View>
    );

}

export default DetailsFilm