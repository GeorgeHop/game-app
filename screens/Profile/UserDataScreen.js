import React from 'react';
import {View, TextInput, TouchableOpacity, Dimensions, Keyboard} from "react-native";
import Button from "../../components/Form/Button";
import {firebase} from "../../src/firebase/config";
import UserContext from "../../helpers/UserContext";

const width = Dimensions.get('window').width;

export const UserDataScreen = (props) => {
    const userContext = React.useContext(UserContext);
    const [user, setUser] = React.useState(userContext);
    const [email, setEmail] = React.useState(user.email);
    const [userName, setUserName] = React.useState(user.userName);


    const usersRef = firebase.firestore().collection('users');
    const userId = user.id;


    const updateUserData = () => {
        if (email !== '' && userName !== '') {
            const data = {
                userName: userName,
                id: userId,
                email: email,
            };
            usersRef
                .add(data)
                .then(_doc => {
                    Keyboard.dismiss()
                })
                .catch((error) => alert(error))
        } else {
            alert('Please add some data')
        }
    }

    const logout = () => {
        firebase.auth().signOut();
        props.navigation.push('LoginScreen');
    }

    return(
        <View style={styles.container}>
            <View style={styles.column}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.userImage}/>
                    <TextInput style={styles.inputUnderline} value={userName} onChangeText={(text) => setUserName(text)}/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.inputUnderline} value={email} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View style={styles.row}>
                    <TextInput style={styles.inputUnderline}/>
                </View>
                <View style={styles.row}>
                    <Button buttonText={'Update user profile'} onPress={updateUserData}/>
                    <Button buttonText={'Logout'} onPress={logout}/>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    column: {
        flexDirection: 'column'
    },
    inputUnderline: {
        maxWidth: '90%',
        minWidth: width - 200,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#bababa',
        padding: 10,
    },
    userImage: {
        height: 80,
        width: 80,
        borderRadius: 80,
        backgroundColor: '#700a0a',
        marginRight: 10,
    }
};