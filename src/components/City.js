import React, { Component } from 'react';
import './styles.css';
import Posts from './Posts';


class City extends Component{
  render(){
    return (
      <div>
      <h1>San Francisco</h1>
      <header></header>

      <Posts/>

      </div>
    )
  }
}
export default City;
