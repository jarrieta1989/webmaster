import {Link} from 'react-router-dom';
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
                <Link to='/roles'>
                <button className="botonGenerico mainButton">
                <i class="fas fa-user-tag" id='roles'> Roles </i>
                </button>
                </Link>
            </li>
            <li>
                <div className="buscar">
                <input placeholder="Buscar" />
                <i className="fas fa-search botonGenerico iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <Link to='/productos'>
                <button className="botonGenerico mainButton">
                    <i className="fas fa-shopping-cart" id="carrito"> Productos</i>
                </button>
                </Link>
            </li>
            <li>
                <Link to='/ventas'>    
                <button className="botonGenerico mainButton"> 
                <i class="fas fa-clipboard-check" id='ventas'></i> Ventas </button>
                </Link>
            </li>
            <li>
                <Link to='/inicio'>
                <button className="botonGenerico mainButton">
                <i className="fas fa-user" id="login"></i>Cerrar sesión </button>
                </Link>
            </li>
            </ul>
        </header> 
      
    )
    
}

export default Navbar;

