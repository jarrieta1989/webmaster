import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
import ModuloProducto from "./pages/ModuloProducto";
import { Roles } from './pages/roles';





function App() {
  return (
    <div className='App' >
      <Router>
        <Switch>
          <Route path='/productos'>
            <ModuloProducto/>
          </Route> 
          <Route path='/roles'>
            <Roles/>
          </Route> 
          <Route path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}



export default App;
