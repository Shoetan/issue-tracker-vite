import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase_config'


const registerUser = async (email, password) => { 
    
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
}

export {registerUser}