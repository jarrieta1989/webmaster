import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import { useAuth0 } from "@auth0/auth0-react";
import ModuloProducto from "./pages/ModuloProducto";
import Layout from "./Layouts/Layout";
import Layout2 from "./Layouts/Layout2";
import Home from "./pages/Home";
import ModuloVenta from "./pages/ModuloVenta";
import ModuloUsuario from "./pages/ModuloUsuario";







function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className='App' >
      {isAuthenticated ? 

        <Router>
        <Layout>
        <Switch>
          <Route path='/ventas'>
            <ModuloVenta/>
          </Route>
          <Route path='/ModuloProductos'>
            <ModuloProducto/>
          </Route>
          <Route path='/roles'>
            <ModuloUsuario/>
          </Route>
        </Switch>
        </Layout>
        </Router>

      : 
      <Router>
      <Layout2>
      <Switch>   
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
      </Layout2>
      </Router>}
      
    </div>
  );
     
}



export default App;
