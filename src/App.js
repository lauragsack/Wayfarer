import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'
import UserModel from './models/user'


class App extends Component {

  
  render() {
    return (
      <>
        <Navbar />
        <div>
          <Routes />
        </div>
      </>
    );
  }
  }

export default withRouter(App);
