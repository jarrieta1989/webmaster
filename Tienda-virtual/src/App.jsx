import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
import ModuloProducto from "./pages/ModuloProducto";
import { Roles } from './pages/roles';
import Ventas from './pages/ventas';
import Layout from "./Layouts/Layout";




function App() {
  return (
    <div className='App' >
      <Router>
        <Layout>
         <Switch>
          <Route path='/ventas'>
            <Ventas/>
          </Route>
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
        </Layout>
      </Router>
    </div>
  );
     
}



export default App;
