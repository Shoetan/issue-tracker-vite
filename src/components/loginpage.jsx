import Navbar from '../components/navbar'


const LoginPage = () => {
    return ( 
        <div>
            {/* calling the navbar component and assigning props to the navbar component  */}
            <Navbar
                navbarLogo="Bug tracker"
                navbarGreet="Don't have an account"
                navbarLink="Sign up"
            />

        </div>
     );
}
 
export default LoginPage;