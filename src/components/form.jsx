const Form = ({email, password, btntext}) => {
    return ( 
        <div>
        
            <label>
                {email}
            </label>
            <input type="email" name="" id=""  placeholder="" />

            <label>
               {password} 
            </label>
            <input type="password" name="" id=""  placeholder="" />

            <button>
                {btntext}
            </button>
            
        </div>
     );
}
 
export default Form;