import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3Vb9WiHp2Vv0J3cJdbuyo2MHSi5SQLzw",
    authDomain: "react-native-quest-app.appspot.com",
    databaseURL: "https://react-native-quest-app.firebaseio.com",
    projectId: "react-native-quest-app",
    storageBucket: "react-native-quest-app.appspot.com",
    messagingSenderId: "888276428398-g5vnfnenft3ac2dco82fdiphivlvln48.apps.googleusercontent.com",
    appId: "1:888276428398:android:d4b4a0b40d7711b390a87f",
};

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export {firebase};