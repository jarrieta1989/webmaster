import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../media/logo.png';
import '../styles/navbar.css'



function Navbar() {
    const { logout } = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    return(
        
        <header>
            <ul className="navbar1">
            <li>
                <img src= {logo} alt="imagen" className="logo1" />
            </li>
            <li>
                <button className="botonGenerico1 mainButton1" type="submit">{isAuthenticated ? user.name: "User"}
                <i className="fas fa-user" id="login"></i></button>
            </li>
            <li>
                <Link to='/roles'>
                <button className="botonGenerico1 mainButton1">
                <i class="fas fa-user-tag" id='roles'> Roles </i>
                </button>
                </Link>
            </li>
            <li>
                <div className="buscar1">
                <input placeholder="Buscar" />
                <i className="fas fa-search botonGenerico1 iconoBusqueda1"></i>
                </div>
            </li>
            <li>
                <Link to='/ModuloProductos'>
                <button className="botonGenerico1 mainButton1">
                    <i className="fas fa-shopping-cart" id="carrito"> Productos</i>
                </button>
                </Link>
            </li>
            <li>
                <Link to='/ventas'>    
                <button className="botonGenerico1 mainButton1"> 
                <i class="fas fa-clipboard-check" id='ventas'></i> Ventas </button>
                </Link>
            </li>
            <li>
                <button className="botonGenerico1 mainButton1" onClick={() => logout({ returnTo: window.location.origin })}>
                <i className= "fas fa-sign-out-alt" id="login"></i>Cerrar sesión </button>
            </li>
            </ul>
        </header> 
      
    )
    
}

export default Navbar;

