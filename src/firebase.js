import * as firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

function inicializarFirebase() {

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: "pwachat-17510.firebaseapp.com",
        databaseURL: "https://pwachat-17510.firebaseio.com",
        projectId: "pwachat-17510",
        storageBucket: "pwachat-17510.appspot.com",
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: "1:1083753404734:web:04ff29d1bc8fd23846f46f"
    }

        firebase.initializeApp(firebaseConfig)
}

export default inicializarFirebase