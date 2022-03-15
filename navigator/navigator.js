import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../pages/Accueil';
import Recherche from '../pages/Recherche';
import ListFilm from '../pages/ListFilm';
import DetailsFilm from '../pages/DetailsFilm';


const Stack = createNativeStackNavigator();

export default class HomeNavigator extends React.Component {

    render() {
        return (
            <Stack.Navigator

            >

                <Stack.Screen

                    name="Accueil"
                    component={Accueil}
                    options={{
                        title: 'Accueil',
                        headerStyle: {
                            backgroundColor: '#97999A',

                        },
                        headerTitleAlign: "center",
                        headerShown: true, headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen

                    name="Recherche"
                    component={Recherche}
                    options={{
                        title: 'Recherche de Film',
                        headerStyle: {
                            backgroundColor: '#97999A',

                        },
                        headerTitleAlign: "center",
                        headerShown: true, headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen

                    name="ListFilm"
                    component={ListFilm}
                    options={{
                        title: 'Liste Des Film Rechercher',
                        headerStyle: {
                            backgroundColor: '#97999A',

                        },
                        headerTitleAlign: "center",
                        headerShown: true, headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen

                    name="DetailsFilm"
                    component={DetailsFilm}
                    options={{
                        title: 'Details Film', headerShown: true,
                        headerStyle: {
                            backgroundColor: '#97999A',

                        },
                        headerTitleAlign: "center",
                        headerShown: true, headerTintColor: '#fff',
                    }}
                />


            </Stack.Navigator>
        )
    }
}

