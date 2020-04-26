
//importing
import React, { Component } from 'react';
import './styles.css';

//Trying to render data from seed file before rendering

class City extends Component{
  // state = {
  //   city: this.props.city,
  //   posts: []
  // }
        //similar to<p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
  render(){
    return (
      <div>
      <h1>San Francisco</h1>
      <header></header>

      <button onClick='#'>Edit</button>
      <button onClick='#'>Delete</button>


      </div>
    )
  }
}
export default City;
