import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Button from "../../components/Form/Button";
import {firebase} from "../../src/firebase/config";
import Input from "../../components/Form/Input";
import {UserContext} from "../../helpers/UserContext";

const LoginScreen = ({navigation}) => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const userContext = React.useContext(UserContext);

    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const userRef = firebase.firestore().collection('users')
                userRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert('User does not exist anymore')
                            return;
                        }

                        const user = firestoreDocument.data()
                        userContext.login({user})
                        navigation.navigate('NavigationScreen', {user})
                    })
                    .catch(error => alert(error));
            })
            .catch(error => alert(error));
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
                <Input
                    label={'Login'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    label={'Password'}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button buttonText={'Login'} onPress={login}/>
            </View>
        </View>
    )
}

const styles = {
    card: {
        backgroundColor: '#5b27cb',
        height: 300,
        borderRadius: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
}

export default LoginScreen;