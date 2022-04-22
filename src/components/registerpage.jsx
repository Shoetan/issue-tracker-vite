import Navbar from './navbar'
import Form from './form'

import {useNavigate} from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase_config'


const RegisterPage = () => {


    /* Using thge use navigate imported from react-router-dom */
    let navigate = useNavigate()


    /* this function will run when the button in the navbar and will redirect the user to the login page */
    const click = () => {
        navigate('/')
    }


    const registerUser = async (email, password) => { 
    
        try {
            
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('I am registered')
            navigate('/dashboard')
    
        } catch (error) {
           console.log(error.message) 
        }
       
        
    }


    return (
        <div>
            {/* Calling the navbar component and assiging probs to the  component */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Already have an account"
                navbarLinkText="Login"
                /* this props her is what handles the click event on the navbar. It accepts a function as its value. The value is a function that redirects the user to login page */
                clickEvent={click}
            />

            {/* pass in the register function as props */}

            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Sign up"

                /*below is the function used to login in an already existing user it accepts a function as its value*/
                handleClick={registerUser}
                
            />

        </div>
     );
}
 
export default RegisterPage;