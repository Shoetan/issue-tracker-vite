

/* importing the method to be used to sign in from the firebase auth servives */
import { signInWithEmailAndPassword } from 'firebase/auth'

/* importing the auth service to be used */
import { auth } from '../firebase_config'
import { useNavigate} from 'react-router-dom'



/* function to login user takes two parameters of email and password */
const loginUser = async (email, password) => {

    try {
            /* calling the firebase function used to log in already existing user*/
        await signInWithEmailAndPassword(auth, email, password)
        console.log('I am logged in')
        navigate('/dashboard')
       

    } catch (error) {
        console.log(error.message)
    }


}

export { loginUser }