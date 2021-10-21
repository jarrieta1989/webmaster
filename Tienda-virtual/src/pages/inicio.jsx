
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';



function Inicio() {
    const {user, isAuthenticated} = useAuth0();
    const [validUser, setValidUser] = useState(false);
    
    const validateUserRole = async() => {
            const response = await fetch(`http://localhost:3001/get-user?email='${user.email}'`);
            const jsonResponse = await response.json();
            return jsonResponse;
    }
        
    const grantAccess = async () =>{
            let userData;
            if(isAuthenticated) {
              userData = await validateUserRole();
            }
        
            else{
              setValidUser(false);
              return;
            }
            
            if (userData) {
                if (userData.role != "invited") {
                     setValidUser(true);
                     localStorage.setItem("state", userData.role);
                }
        
                else{
                    localStorage.setItem("state", userData.role);
                    setValidUser(false);
        
                }  
            }
            else{
                setValidUser(false);
            }
        
    }
    
    useEffect(() => {
        grantAccess();   
    }, [isAuthenticated, validUser]);

}


    export default Inicio;