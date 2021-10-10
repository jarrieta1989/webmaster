import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
<<<<<<< HEAD
import ModuloProducto from "./pages/ModuloProducto";


=======
import { Roles } from './pages/roles';
>>>>>>> e4230332e29b8c68d21a627c3790271764d00e38



function App() {
  return (
    <div className='App' >
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path='/'>
            <Login/>
          </Route>

          <Route path="/producto" exact>
           <ModuloProducto />
          </Route>
=======
          <Route path='/'><Login/></Route>
          <Route path='/roles'><Roles/></Route>
>>>>>>> e4230332e29b8c68d21a627c3790271764d00e38
        </Switch>
      </Router>
    </div>
  );
}



export default App;
