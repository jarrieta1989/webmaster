import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';  
import Login from './pages/login';
import { Roles } from './pages/roles';



function App() {
  return (
    <div className='App' >
      <Router>
        <Switch>
          <Route path='/'><Login/></Route>
          <Route path='/roles'><Roles/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}



export default App;
