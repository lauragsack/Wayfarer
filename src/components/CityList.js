
// import React, { Component } from 'react';

// class City extends Component{
//   render(){
//     return (
//       <div>
//       <h1>{this.props.city.name}</h1>
//       <img src={this.props.city.image}/>
//       </div>
//     )
//   }
// }
// export default City;


import React, { Component } from 'react';
// import CityShow from './CityShow'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


class CityList extends Component{

	state={
	city : this.props.city,
	// cityId: this.props.key
	}

  	render(){
	    return (

     <ListItem button onClick={this.props.display}>
     	<ListItemText>
     	{this.props.city.name}
     	</ListItemText>
     </ListItem>
	    )
  	}
}
export default CityList;
