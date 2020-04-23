import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Profile from '../components/Profile'



export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="/login" component={ Login } />
        <Route path="/profile" component={ Profile }/>


    </Switch>
)