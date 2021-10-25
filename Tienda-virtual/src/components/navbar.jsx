import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../media/logo.png';
import '../styles/navbar.css'
import { useState, useEffect } from 'react';
import apiBaseUrl from './Api';



function Navbar() {
    const { logout } = useAuth0();
    const {user,isAuthenticated} = useAuth0();
    // const [permiso, setPermiso, setName] = useState(false);
    const [permiso, setPermiso] = useState(false);

    const getInfo = async () =>{
        try{
            // const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`)
            const response = await fetch(`${apiBaseUrl}/api/usuarios?email=${user.email}`)
            const jsonResponse = await response.json();
            const userData = jsonResponse;
            if(userData.role != 'invited') setPermiso(true);
        }catch(e){console.log(e)}
    }

  useEffect(()  =>{
     getInfo()

  },[]) 

     return(      
        
        <header>
    {(permiso === true) ?
        <ul className="navbar1">
            <li>
                 <img src= {logo} alt="imagen" className="logo1" />
            </li>
            <li>
                <img  className='fotoLogin botonGenerico' src={isAuthenticated ? user.picture : "photo" }/>   
                <button className="botonGenerico1 mainButton1" type="submit">{isAuthenticated ? user.name: "User"}
                </button>
            </li>
            <li>
                <Link to='/roles'>
                <button className="botonGenerico1 mainButton1">
                <i className="fas fa-user-tag" id='roles'> Roles </i>
                </button>
                </Link>
            </li>
            {/* <li>
                <div className="buscar1">
                <input placeholder="Buscar" />
                <i className="fas fa-search botonGenerico1 iconoBusqueda1"></i>
                </div>
            </li> */}
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
                <i className="fas fa-clipboard-check" id='ventas'></i> Ventas </button>
                </Link>
            </li>
            <li>
                <button className="botonGenerico1 mainButton1" onClick={() => logout({ returnTo: window.location.origin })}>
                <i className= "fas fa-sign-out-alt" id="login"></i>Cerrar sesión </button>
            </li>
        </ul>
        :
        
        <ul className="navbar1">
            <li>
                 <img src= {logo} alt="imagen" className="logo1" />
            </li>
            <li>
                <img  className='fotoLogin botonGenerico' src={isAuthenticated ? user.picture : "photo" }/>   
                <button className="botonGenerico1 mainButton1" type="submit">{isAuthenticated ? user.name: "User"}
                </button>
            </li>
            <li>
                <button className="botonGenerico1 mainButton1" onClick={() => logout({ returnTo: window.location.origin })}>
                <i className= "fas fa-sign-out-alt" id="login"></i>Cerrar sesión </button>
            </li>
        </ul>    }
        
        </header>
    
 
    )
    




}

export default Navbar;