import Navbar from '../components/navbar'


const SignInPage = () => {
    return (
        <div>
            {/* Calling the navbar component and assiging probs to the  component */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Already have an account"
                navbarLink="Login"
            />

        </div>
     );
}
 
export default SignInPage;