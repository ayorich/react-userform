import firebase from 'firebase/app'
import 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAw2OTt8_g4E78ndkmRX5Y8aEL9j_h7WeQ",
    authDomain: "userformapi.firebaseapp.com",
    databaseURL: "https://userformapi.firebaseio.com",
    projectId: "userformapi",
    storageBucket: "userformapi.appspot.com",
    messagingSenderId: "553247922020",
    appId: "1:553247922020:web:8752a04328df9faf85cc71",
    measurementId: "G-SQYFYRT8LD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots:true})
// firebase.analytics();

console.log(firebase);
export default firebase;