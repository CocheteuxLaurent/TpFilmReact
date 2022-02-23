import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';
import Recherche from './Recherche';
import ListFilm from './ListFilm';
import DetailsFilm from './DetailsFilm';


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
                            backgroundColor: '#3DA6FF',

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
                            backgroundColor: '#3DA6FF',

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
                            backgroundColor: '#3DA6FF',

                        },
                        headerTitleAlign: "center",
                        headerShown: true, headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen

                    name="DetailsFilm"
                    component={DetailsFilm}
                    options={{ title: 'Details Film', headerShown: true }}
                />


            </Stack.Navigator>
        )
    }
}

