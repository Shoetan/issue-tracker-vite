import Navbar from '../components/navbar'
import Form from '../components/form'
import { loginUser } from '../Logic/login'
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {


    let navigate = useNavigate()

    const click = () => {
        navigate('/register')
    }


 
    return ( 
        <div>
            {/* calling the navbar component and assigning props to the navbar component  */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Don't have an account"
                navbarLink="Sign up"
                clickEvent = {click}
            />


                    {/* pass the login  function as  prop */}
            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Login"
                fn ={loginUser}
                
            />

       



        </div>
     );
}
 
export default LoginPage;