import {useState} from 'react';

function PasswordToggle(){
    const[showPassword, setShowPassword] = useState(false);
    
    return(
        <div> 
             {showPassword ? <p>mypassword123</p>:<p>*************</p>}
            <button onClick={() => setShowPassword(!showPassword)}>
             {showPassword ? 'Hide Password' : 'Show Password'}
           </button>
        </div>
            
       )
}
export default PasswordToggle;