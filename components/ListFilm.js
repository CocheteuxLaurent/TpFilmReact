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
            <View style={styles.card}>
            </View>


            {isLoading ? <Text>chargement en cours ....</Text> :
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('DetailsFilm', {
                                    data: item.imdbID
                                }
                                )
                            }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', margin: 10 }}>{item.Title}</Text>
                                <Image style={styles.poster} source={{ uri: `${item.Poster}` }} resizeMode='contain'></Image>

                            </View>
                        </Pressable>
                    }

                >
                </FlatList >

            }


        </View >
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    poster: {
        height: 100,

    }
    /* card: {
         flexDirection: 'column',
         alignItems: 'center',
         shadowColor: 'black',
         padding: 30,
 
     },
     container2: {
         borderTopRightRadius: 40,
         borderTopLeftRadius: 40,
         alignItems: 'center',
         backgroundColor: 'white',
 
     }
     */
})

export default ListFilm