import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'
import UserModel from './models/user'
import CityModel from './models/city'
import './App.css'

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("user")),
    cityList: [],
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

  async fetchCityList(){
    let response = await CityModel.all();
    this.setState({
      cityList: response.data
    });
  }

  componentDidMount() {
    this.fetchCityList();
  }

  render() {
    return (
      <div>
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
            cityList={this.state.cityList}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
