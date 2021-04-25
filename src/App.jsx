import React from 'react';
import Inicio from './component/Inicio';
import Login from './component/Login';
import Admin from './component/Admin';
import Menu from './component/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
