
//importing
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PostModel from '../models/post';
import Post from '../components/Post';
import './styles.css';

//Trying to render data from seed file before rendering

class City extends Component{
  state = {
    city: this.props.city,
    posts: []
  }
  // componentDidMount() {
  //     this.fetchData();
  // };
  //
  // fetchData = () => {
  //     PostModel.city().then((res) => {
  //         this.setState({
  //             posts: res.data
  //         });
  //     });
  // }
        //similar to<p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
  render(){
    let posts = this.state.posts.map((post) => {
    return (
        <Post
            key={post._id}
            post={post}
        />
    );
});
    return (
      <div>
      <h1>San Francisco</h1>
      <header></header>
      {posts}

      <button>Create</button>
      <button onClick='#'>Delete</button>


      </div>
    )
  }
}
export default City;
