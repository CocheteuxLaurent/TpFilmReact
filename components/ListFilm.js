import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, StyleSheet, Text, Image } from "react-native";
import { ItemsCard } from './Items';

const ListFilm = ({ route, navigation }) => {
    const { nomFilm } = route.params;
    console.log(nomFilm);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();//données Film
    const url = `http://www.omdbapi.com/?s=${nomFilm}&apikey=5edd8232`;

    useEffect(() => {

        const recupFilm = async () => {
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson.Search);
                setLoading(false);

            } catch (e) {
                console.log(e);
                setLoading(true)
            }
        }
        recupFilm();
    }, []);

    return (
        <View style={styles.container}>



            {isLoading ? <Text>chargement en cours ....</Text> :
                <View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            // <View style={styles.card}>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('DetailsFilm', {
                                        imdbID: item.imdbID
                                    }
                                    )
                                }}>
                                <View style={styles.card}>
                                    <Text style={{
                                        fontWeight: 'bold', margin: 10, color: 'white', textAlign: 'center',
                                    }}>{item.Title}</Text>

                                    <Image style={styles.poster} source={{ uri: `${item.Poster}` }} resizeMode='contain'></Image>

                                </View>
                            </Pressable>
                            // </View>   
                        }
                    >
                    </FlatList >
                </View >
            }


        </View >
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    poster: {
        height: 100,
        borderRadius: 10,
    },
    card: {
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        //alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#F9DC0E',

    }

})

export default ListFilm