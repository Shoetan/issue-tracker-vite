

/* importing the method to be used to sign in from the firebase servives */
import { signInWithEmailAndPassword } from 'firebase/auth'

/* importing the auth service to be used */
import { auth } from '../firebase_config'


/* function to login user takes two parameters of email and password */
const loginUser = async (email, password) => {

    try {

        await signInWithEmailAndPassword(auth, email, password)
        console.log('I am logged in')

    } catch (error) {
        console.log(error.message)
    }


}

export { loginUser }