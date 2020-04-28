import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import PostShow from '../components/PostShow'
import ProfileContainer from '../containers/ProfileContainer'
import CitiesContainer from '../containers/CitiesContainer'

 function Routes(props){
   return(
     <Switch>
       <Route exact path="/">
         <Home cityList={props.cityList} />
       </Route>
       <Route path="/profile">
         <ProfileContainer
           currentUser={props.currentUser}
           setCurrentUser={props.setCurrentUser}
           />
       </Route>
       <Route path="/cities/:id?" render={routeProps =>
           <CitiesContainer
             {...routeProps}
             cityList={props.cityList}
             />
         }
         />
       <Route path="/posts/:id" component={ PostShow }/>
     </Switch>
   );
}

export default Routes;
