import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from "../../components/Form/Button";
import {firebase} from "../../src/firebase/config";
import Input from "../../components/Form/Input";

const RegistrationScreen = ({navigation}) => {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [confirmRegistration, setConfirmRegistration] = React.useState(false);
    const [level, setLevel] = React.useState(1);

    const registration = () => {
        if (password !== confirmPassword) {
            alert("Password don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const data = {
                    id: uid,
                    email,
                    userName,
                    level
                };
                console.log(data)
                console.log(response, 'response')
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        console.log(data, 'data')
                        navigation.navigate('LoginScreen', {user: data})
                    })
                    .catch((error) => alert(error));
            })
            .catch((error) => alert(error));
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
                {confirmRegistration === true ? (
                    <Text style={styles.label}>Registration was confirmed</Text>
                ) : (
                    <>
                        <Input
                            label={'User name'}
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                        />
                        <Input
                            label={'Email'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Input
                            secureTextEntry={true}
                            label={'Password'}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Input
                            secureTextEntry={true}
                            label={'Confirm Password'}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                        <Button buttonText={'Registration'} onPress={registration}/>
                    </>
                )}
            </View>
        </View>
    )
}

const styles = {
    label: {
        color: '#acacac'
    },
    input: {
        width: '80%',
        marginHorizontal: 50,
        backgroundColor: '#dddddd',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: '#000000'
    },
    card: {
        backgroundColor: '#5b27cb',
        height: 500,
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

export default RegistrationScreen