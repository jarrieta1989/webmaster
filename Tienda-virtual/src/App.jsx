import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
import ModuloProducto from "./pages/ModuloProducto";
import { Roles } from './pages/roles';
import ventas from './pages/ventas';



function App() {
  return (
    <div className='App' >
      <Router>
        <Switch>
<<<<<<< HEAD
=======
          <Route path="/producto" exact><ModuloProducto /></Route>
          <Route path='/'><Login/></Route>
>>>>>>> 20b9d9e37ce4ab3e600bd7fac62d908ba26faed5
          <Route path='/roles'><Roles/></Route>
          <Route path='/ventas'><Ventas></Route>
          <Route path='/'><Login/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}



export default App;
