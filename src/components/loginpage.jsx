import Navbar from '../components/navbar'
import Form from '../components/form'


const LoginPage = () => {


 
    return ( 
        <div>
            {/* calling the navbar component and assigning props to the navbar component  */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Don't have an account"
                navbarLink="Sign up"
            />



            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Login"
            />

       



        </div>
     );
}
 
export default LoginPage;