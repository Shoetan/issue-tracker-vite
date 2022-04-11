
/* created a stateless component known as navbar and passiing in props by destructuring the props into individuals */

const Navbar = ({ navbarLogo, navbarLink, navbarGreet }) => {
    return ( 
        <div className=" container mx-auto flex justify-around items-center   mt-2 mb-2 bg-white-color  rounded ">
            
            {/* Icon */}
            <h1 className="font-poppins text-black-color">{navbarLogo}</h1>

            {/* navigation links */}
            <div className="flex gap-8 items-center">
                <h2 className="font-poppins text-black-color">{ navbarGreet}</h2>
                <a href="" className="font-poppins text-white-color bg-accent-color p-2 rounded hover:bg-secondary-color">{ navbarLink } </a>
            </div>
        </div>
     );
}
 
export default Navbar;