import {link} from 'react-router-dom';
import logo from '../media/logo.png';
import '../styles/navbar.css'


function Navbar() {
    return(
        
        <header>
            <ul className="navbar">
            <li>
                <img src= {logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="botonGenerico mainButton">
                <i class="fas fa-home" id="casa"> Inicio</i>
                </button>
            </li>
            <li>
                <div className="buscar">
                <input placeholder="Buscar" />
                <i className="fas fa-search botonGenerico iconoBusqueda"></i>
                </div>
            </li>
            <li><button className="botonGenerico mainButton"><i className="fas fa-shopping-cart" id="carrito"> Productos</i></button></li>
            <li><button className="botonGenerico mainButton"> <i class="fas fa-clipboard-check" id='ventas'></i> Ventas </button></li>
            <li><button className="botonGenerico mainButton"><i className="fas fa-user" id="login"></i>Cerrar sesión </button></li>
            </ul>
        </header> 
      
    )
    
}

export default Navbar;