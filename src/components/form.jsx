import {useState} from 'react'

const Form = ({ email, password, btntext, fn }) => {
    
    const [userEmail, setUserEmail] = useState("")
    const [ userPassword, setUserPassword] = useState("")

    return ( 

        <div className='max-w-xl mx-auto mt-32 p-6 flex flex-col items-center justify-center bg-primary-color rounded-lg shadow-lg shadow-dark-color'>
            <div className="flex flex-col w-11/12 m-10 items-center justify-center ">

                <label className="font-poppins mb-2 text-gray-700">
                    {email}
                </label>
                <input type="email" name="" id="" placeholder="Enter your email" className="mb-6 w-full py-2 px-3 rounded shadow-lg shadow-dark-color outline-none leading-tight"  onChange={(e) =>{ setUserEmail (e.target.value)}}/>

                <label className="font-poppins mb-2 text-gray-700">
                    {password}
                </label>
                <input type="password" name="" id="" placeholder="Enter your password" className="mb-6 w-full py-2 px-3 outline-none rounded shadow-lg shadow-dark-color leading-tight" onChange ={(e) => {setUserPassword(e.target.value)}} />

                <button className="font-poppins bg-accent-color text-white-color hover:bg-secondary-color hover:text-white-color py-2 px-6  rounded-full shadow-lg shadow-dark-color" onClick={fn}>
                    {btntext}
                </button>
                <a href="#" className="text-center text-gray-700 text-xs mt-4">
                       forgot password?   
                </a>

            </div>
        </div>
      
     );
}
 
export default Form;