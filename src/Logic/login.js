import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase_config'

const loginUser = async (email, password) => {

    try {

        await signInWithEmailAndPassword(auth, email, password)
        console.log('I am logged in')

    } catch (error) {
        console.log(error.message)
    }


}

export { loginUser }