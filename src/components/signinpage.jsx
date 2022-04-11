import Navbar from '../components/navbar'
import Form from '../components/form'


const SignInPage = () => {
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
                btntext="Sign in"
            />

        </div>
     );
}
 
export default SignInPage;