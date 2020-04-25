import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import PostShow from '../components/PostShow'
import ProfileContainer from '../containers/ProfileContainer'
import PostsContainer from '../containers/PostsContainer'

export default (props) => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route path="/profile">
      <ProfileContainer currentUser={props.currentUser} />
    </Route>
    <Route path="/posts" component={ PostsContainer }/>
    <Route path="/posts/:id" component={ PostShow }/>
  </Switch>
);
