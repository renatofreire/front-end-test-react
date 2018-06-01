import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDp3AgnLD6nq5Sf8hu4tHzRMESnCRgZhxk",
    authDomain: "teste-react-af861.firebaseapp.com",
    databaseURL: "https://teste-react-af861.firebaseio.com",
    projectId: "teste-react-af861",
    storageBucket: "teste-react-af861.appspot.com",
    messagingSenderId: "654488599519"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebaseImpl.database();
