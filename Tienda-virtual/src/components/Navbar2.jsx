import { useAuth0 } from "@auth0/auth0-react";
import logo from '../media/logo.png';
import '../styles/navbar.css'



const Navbar2 = () => {
    const { loginWithRedirect } = useAuth0();
    return (
             <header>
                <ul className="navbar1">
                <li>
                    <img src= {logo} alt="imagen" className="logo1" />
                </li>
                <li>    
                    hola
                </li>
                <li>    
                    hola
                </li>
                <li>    
                    hola
                </li>
                <li>
                    <button className="botonGenerico1 mainButton1" onClick={()=> loginWithRedirect()} >
                    <i className="fas fa-user" id="login"></i> Iniciar sesión </button>
                </li>
                </ul>   
            </header>

    )    
}


export default Navbar2;


