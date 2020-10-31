import React from 'react';
import {View, Text} from 'react-native';
import NavigationScreen from "./NavigationScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import {firebase} from "../../src/firebase/config";
import UserContext from "../../helpers/UserContext";
import LoaderScreen from "../HelpersScreens/LoaderScreen";

const UserValidatingScreen = (props) => {
    const [user, setUser] = React.useState(null);
    const userContext = React.useContext(UserContext);

    React.useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data();
                        userContext.login(userData);
                        setUser(userData);
                    })
                    .catch((error) => {
                        alert(error)
                    })
            }
        });
    }, []);


    return (
        user ? <NavigationScreen {...props} extraData={user}/> : <HomeScreen {...props}/>
    )
}

export default UserValidatingScreen;