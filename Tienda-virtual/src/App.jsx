import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
import ModuloProducto from "./pages/ModuloProducto";





function App() {
  return (
    <div className='App' >
      <Router>
        <Switch>
          <Route path='/'>
            <Login/>
          </Route>

          <Route path="/producto" exact>
           <ModuloProducto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
