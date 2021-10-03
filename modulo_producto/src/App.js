import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader, Navbar} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavbarPage from './nabvar/NabvarPage';
import ModuloProducto from './productos/ModuloProducto';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import FooterPage from './footer/FooterPage';




function App() {

  

  return (
    <div>  
   <Router>
   <NavbarPage />
     <Switch>
    <Route path="/" exact> 
      
    </Route>

    <Route path="/producto" exact> 
      <ModuloProducto />
    </Route>

    </Switch>
   
    <FooterPage />
   </Router>
    </div>





  );
}

export default App;
