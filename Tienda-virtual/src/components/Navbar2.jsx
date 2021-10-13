import { useAuth0 } from "@auth0/auth0-react";
import logo from '../media/logo.png';
import '../styles/navbar.css'



const Navbar2 = () => {
    const { loginWithRedirect } = useAuth0();
    return (
             <header>
                <ul className="navbar">
                <li>
                    <img src= {logo} alt="imagen" className="logo" />
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
                    <button onClick={()=> loginWithRedirect()} className="botonGenerico mainButton">
                    <i className="fas fa-user" id="login"></i> Inicar sesión </button>
                </li>
                </ul>   
            </header>

    )    
}


export default Navbar2;


