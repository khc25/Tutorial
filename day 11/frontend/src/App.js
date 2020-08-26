import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Index from './components/index'
import MenuBar from './components/Menubar'
import UploadHomework from './components/UploadHomework';
import Registor from './components/register';
import GetUser from './components/getUser';
import UserDetails from './components/userDetail';
import Login from './components/login';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute'



function App() {
  return (
    <div>
      <MenuBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <PrivateRoute exact path='/upload' component={UploadHomework} />
          <PublicRoute exact path='/registor' component={Registor} />
          <PrivateRoute exact path='/getuser' component={GetUser} />
          <PrivateRoute exact path='/user/:id' component={UserDetails} />
          <PublicRoute exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
