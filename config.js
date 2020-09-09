import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9-V_MWzPZk92QCA0eetpmF23k1MUXVac",
    authDomain: "fir-forwireless-library.firebaseapp.com",
    databaseURL: "https://fir-forwireless-library.firebaseio.com",
    projectId: "fir-forwireless-library",
    storageBucket: "fir-forwireless-library.appspot.com",
    messagingSenderId: "1035163176815",
    appId: "1:1035163176815:web:f6eefa42225a730cffe29a"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

