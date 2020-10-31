import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationScreen from "../screens/Navigation/NavigationScreen";
import {UserDataScreen} from "../screens/Profile/UserDataScreen";
import {ProfileScreen} from "../screens/Profile/ProfileScreen";
import LoginScreen from "../screens/LoginRegistrationScreens/LoginScreen";
import RegistrationScreen from "../screens/LoginRegistrationScreens/RegistrationScreen";
import UserValidatingScreen from "../screens/Navigation/UserValidatingScreen";
import {UserContextProvider} from "../helpers/UserContext";


const Stack = createStackNavigator();

export const StackNavigation = ({navigation}) => {
    return (
        <UserContextProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='UserValidatingScreen'
                        component={UserValidatingScreen}
                        options={{
                            title: 'Quest App',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='NavigationScreen'
                        component={NavigationScreen}
                        options={{
                            title: 'User Profile',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="UserDataScreen"
                        component={UserDataScreen}
                        options={{
                            title: 'User Profile',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='ProfileScreen'
                        component={ProfileScreen}
                        options={{
                            title: 'User Profile',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='LoginScreen'
                        component={LoginScreen}
                        options={{
                            title: 'Login',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='RegistrationScreen'
                        component={RegistrationScreen}
                        options={{
                            title: 'Registration',
                            headerStyle: {
                                backgroundColor: '#5b27cb'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'normal',
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserContextProvider>
    );
};