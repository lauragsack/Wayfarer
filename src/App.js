import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'
import UserModel from './models/user'

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("user")),
  }

  setCurrentUser = (user) => {
    this.setState({ currentUser: user })
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("uid", user.id)
    localStorage.setItem("uname", user.name)
  }

  logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("user")
    UserModel.logout()
      .then(res => {
        this.setState({ currentUser: null })
        this.props.history.push("/")
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Navbar
          currentUser={this.state.currentUser}
          logout={this.logout}
          history={this.props.history}
          setCurrentUser={this.setCurrentUser}
        />
        <div className="container">
          <Routes
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            name={this.state.name}
          />
        </div>
      </>
    );
  }
}

export default withRouter(App);
