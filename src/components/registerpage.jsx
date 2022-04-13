import Navbar from './navbar'
import Form from './form'
import { registerUser } from '../Logic/register'


const RegisterPage = () => {
    return (
        <div>
            {/* Calling the navbar component and assiging probs to the  component */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Already have an account"
                navbarLink="Login"
            />

            {/* pass in the register function as props */}

            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Sign up"
                fn={registerUser}
                
            />

        </div>
     );
}
 
export default RegisterPage;