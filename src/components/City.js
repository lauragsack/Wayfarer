
//importing
import React, { Component } from 'react';
import './styles.css';
import Posts from './Posts';

//Trying to render data from seed file before rendering

class City extends Component{
  render(){
    return (
      <div>
      <h1>San Francisco</h1>
      <img src={this.props.city.image} alt = {this.props.city.name}/>
      <h2>{this.props.city.name}</h2>
      <header></header>

      <Posts/>

      </div>
    )
  }
}
export default City;
