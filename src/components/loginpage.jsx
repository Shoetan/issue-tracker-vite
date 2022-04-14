import Navbar from '../components/navbar'
import Form from '../components/form'
import { loginUser } from '../Logic/login'
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {

        /* Using thge use navigate imported from react-router-dom */
    let navigate = useNavigate()

        /* this function will run when the button in the navbar and will redirect the user to the register page */
    const click = () => {
        navigate('/register')
    }


 
    return ( 
        <div>
            
            {/* calling the navbar component and assigning props */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Don't have an account"
                navbarLinkText="Sign up"
                /* this props her is what handles the click event on the navbar. It accepts a function as its value. The value is a function that redirects the user to register page */
                clickEvent = {click}
            />


                    {/* calling the form component and assigning props */}
            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Login"

                    /*below is the function used to login in an already existing user it accepts a function as its value*/
                fn ={loginUser}
                
            />

       



        </div>
     );
}
 
export default LoginPage;