import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import Signup from '../components/Signup'
import Login from '../components/Login'
// might need to delete below import
import Profile from '../components/Profile'
import ProfileContainer from '../containers/ProfileContainer'
import PostsContainer from '../containers/PostsContainer'
// delete below 2 imports after testing
import Profile2 from '../components/Profile2'
import ProfileContainer2 from '../containers/ProfileContainer2'


export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/signup" component={ Signup }/>
        <Route path="/login" component={ Login } />

        {/* might be able to delete below route */}
        {/*<Route path="/profile" component={ Profile }/>*/}

        <Route path="/profile" component={ ProfileContainer }/>
        {/* start - can delete these after testing */}
        <Route path="/profile2" component={ Profile2 }/>
        <Route path="profile2" component={ ProfileContainer2 }/>
        {/* end - can delete these after testing */}
        <Route path="/posts" component={ PostsContainer }/>

    </Switch>
)