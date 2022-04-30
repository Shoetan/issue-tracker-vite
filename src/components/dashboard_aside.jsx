import {BsListTask} from 'react-icons/bs'


const DashboardAside = () => {
    return ( 
        <div className=" w-1/12 bg-primary-color h-screen flex flex-col items-center justify-around">
          {/* menu icon */}
          <div className="flex gap-2">
              {/* icon */}
              <BsListTask
                  size="25"
                  color="black"
              />
              {/* text */}
              <h4>Task</h4>
          </div>
          <div>
                <button className="font-poppins bg-red-color text-white-color p-2 rounded-lg shadow-lg shadow-black-color">Logout</button>
          </div>
          
        </div>
     );
}
 
export default DashboardAside;