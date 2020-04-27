import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import ProfileContainer from '../containers/ProfileContainer'
import CitiesContainer from '../containers/CitiesContainer'
import PostsContainer from '../containers/PostsContainer'

 function Routes(props){
   return(
     <Switch>
       <Route exact path="/" component={ Home }/>
       <Route path="/profile">
         <ProfileContainer
           currentUser={props.currentUser}
           setCurrentUser={props.setCurrentUser}
           />
       </Route>
       <Route exact path="/posts" component={ PostsContainer }/>
       <Route path="/cities/:id?" render={routeProps =>
           <CitiesContainer
             {...routeProps}
             cityList={props.cityList}
             />
         }
         />
     </Switch>
   );
}

export default Routes;
