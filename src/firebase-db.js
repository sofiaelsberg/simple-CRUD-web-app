// import firebase from "firebase/app";
// import "firebase/firestore";

// // Get a Firestore instance
// export const db = firebase
//     .initializeApp({
//         apiKey: "AIzaSyD2J8RQqu2w6J2B6e4Mbn4ty_QEsHhVF0M",
//         authDomain: "post-app-7cb59.firebaseapp.com",
//         databaseURL: "https://post-app-7cb59.firebaseio.com",
//         projectId: "post-app-7cb59",
//         storageBucket: "post-app-7cb59.appspot.com",
//         messagingSenderId: "508009210681",
//         appId: "1:508009210681:web:abcd78e05897ce987afee8"
//     })
//     .firestore();

// export const postRef = db.collection("posts");

import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
    .initializeApp({

        apiKey: "AIzaSyDfxVTHJZvtrjV0aH1LfAKBtVR5ecgtyUY",
        authDomain: "vue-cli-fire-post.firebaseapp.com",
        databaseURL: "https://vue-cli-fire-post.firebaseio.com",
        projectId: "vue-cli-fire-post",
        storageBucket: "vue-cli-fire-post.appspot.com",
        messagingSenderId: "45321067276",
        appId: "1:45321067276:web:208b14442f94d42c708729",
        measurementId: "G-MZL59Z0NS8"

    })
    .firestore()

export const postRef = db.collection('posts')