import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import UserContext from "../../helpers/UserContext";
import {firebase} from "../../src/firebase/config";

const LoaderScreen = (props) => {
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
        <View style={{flex:1,justifyContent: 'center', backgroundColor: '#5b27cb'}}>
            <ActivityIndicator size='large' color='#fafafa'/>
        </View>
    )
}

export default LoaderScreen;