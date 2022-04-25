import { BiSearchAlt } from "react-icons/bi"


const DashboardNav = () => {
  return (

    <>
    {/* Navbar component */}
    <div className="flex  bg-secondary-color p-2 justify-end items-center gap-6 pr-6 sticky top-0">

      {/* first the navigation should span the whole page */}
      <div className="flex bg-primary-color items-center justify-center rounded-md p-1">
        <BiSearchAlt size={25} color="#767676"/>
        <input type="text"  className=" bg-primary-color outline-none"/>
      </div>

      <div>
        <button className="font-poppins bg-accent-color text-white-color hover:bg-primary-color hover:text-black-color py-2 px-6  rounded-full shadow-lg shadow-dark-color">Add issue</button>
      </div>
    </div>
    <div>
      {/* Display of the data*/}
    </div>

    </>
 
    );
}
 
export default DashboardNav;
   