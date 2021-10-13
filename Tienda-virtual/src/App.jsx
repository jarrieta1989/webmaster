import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import ModuloProducto from "./pages/ModuloProducto";
import {Roles}  from './pages/roles';
import Ventas from './pages/ventas';
import Layout from "./Layouts/Layout";
import Layout2 from "./Layouts/Layout2";
import Home from "./pages/Home";




function App() {
  return (
    <div className='App' >
      <Router>
        <Layout2>
         <Switch>
          <Route path='/ventas'>
            <Ventas/>
          </Route>
          <Route path='/ModuloProductos'>
            <ModuloProducto/>
          </Route>
          <Route path='/roles'>
            <Roles/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
         </Switch>
        </Layout2>
      </Router>
    </div>
  );
     
}



export default App;
