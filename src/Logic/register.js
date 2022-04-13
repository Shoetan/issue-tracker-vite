import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase_config'


const registerUser = async (email, password) => { 
    
    try {
        
        await createUserWithEmailAndPassword(auth, email, password)
        console.log('I am registered')

    } catch (error) {
       console.log(error.message) 
    }
   
    
}

export {registerUser}