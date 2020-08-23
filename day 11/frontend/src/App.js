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



function App() {
  return (
    <div>
      <MenuBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/upload' component={UploadHomework} />
          <Route exact path='/registor' component={Registor} />
          <Route exact path='/getuser' component={GetUser} />
          <Route exact path='/user/:id' component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
