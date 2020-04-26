
//importing
import React, { Component } from 'react';


//Trying to render data from seed file before rendering

class City extends Component{
  render(){
    return (
      <div>
      <h1>{this.props.city.name}</h1>
      <img className="mb-5" src={this.props.city.image}/>



      </div>
    )
  }
}
export default City;


