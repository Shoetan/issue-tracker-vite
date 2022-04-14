
/* created a stateless component known as navbar and passiing in props by destructuring the props into individuals */

const Navbar = ({ navbarLogo, navbarLink, navbarGreet, clickEvent }) => {
    return ( 
        <div className=" container mx-auto flex justify-around items-center   mt-2 mb-2   rounded ">
            
            {/* Icon */}
            <h1 className="font-poppins text-gray-700">{navbarLogo}</h1>

            {/* navigation links */}
            <div className="flex gap-8 items-center">
                <h2 className="font-poppins text-gray-700">{ navbarGreet}</h2>
                <button href="" className="font-poppins text-white-color bg-accent-color py-2 px-6 rounded-full hover:bg-secondary-color shadow-lg shadow-dark-color" onClick={clickEvent}>{ navbarLink } </button>
            </div>
        </div>
     );
}
 
export default Navbar;