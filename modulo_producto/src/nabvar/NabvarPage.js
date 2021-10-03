import React from "react";
import {Link} from 'react-router-dom';
 

function NavbarPage(){

return(
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">Inicio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="navbar-brand" aria-current="page" href="#">Venta</Link>
        </li>
        <li class="nav-item">
          <Link to="/producto" class="navbar-brand">Productos</Link>
        </li>
        <li class="nav-item">
          <Link class="navbar-brand" href="#">Usuarios</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>






</div>





);



}

export default NavbarPage;