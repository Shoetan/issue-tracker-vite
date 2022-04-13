import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCFbpmRJdVK1QWzne_nLozBR1Xxc7TIdd8",
    authDomain: "bug-tracker-project-e1435.firebaseapp.com",
    projectId: "bug-tracker-project-e1435",
    storageBucket: "bug-tracker-project-e1435.appspot.com",
    messagingSenderId: "118528979512",
    appId: "1:118528979512:web:49079c3215f0925f38accd"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)