import Navbar from './navbar'
import Form from './form'


const SignUpPage = () => {
    return (
        <div>
            {/* Calling the navbar component and assiging probs to the  component */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Already have an account"
                navbarLink="Login"
            />



            <Form
                email="Enter your email"
                password="Enter your password"
                btntext="Sign up"
            />

        </div>
     );
}
 
export default SignUpPage;