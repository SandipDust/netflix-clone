import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//seed the database
//import { seedDatabase } from '../seed';


//config
const config={
    apiKey: "AIzaSyBh8tOQqoBSkWj_k4YJpXFfN1ZQy-CWfV8",
    authDomain: "netflix-clone-12643.firebaseapp.com",
    databaseURL: "https://netflix-clone-12643.firebaseio.com",
    projectId: "netflix-clone-12643",
    storageBucket: "netflix-clone-12643.appspot.com",
    messagingSenderId: "543651497901",
    appId: "1:543651497901:web:7aa18ddd4f10d4437c8324"

};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};