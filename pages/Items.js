import React from "react";
import { Image, Text, View, StyleSheet } from 'react-native';

const ItemsCard = ({ item }) => {
    return (
        <View>
            <Image style={styles.affiche}
                source={{ uri: `http://www.omdbapi.com/?i=$id&apikey=5edd8232/${item.item.id}.png` }} />
            <View>
                <Text>{item.item.Title}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    affiche: {
        width: 30,
        height: 30,
    }
});

export default ItemsCard;