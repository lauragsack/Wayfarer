import React, { Component } from 'react';
import CityPost from './CityPost';
import PostModel from '../models/post'



class CityShow extends Component {
  state = {
    city: null,
    posts: [],
  }

componentDidUpdate(prevProps, prevState) {
    if(this.state.city !== this.props.cityShow){
      this.setState({
        city: this.props.cityShow,
      })
    }
    if(this.state.city != prevState.city){
      this.fetchPosts();
    }
  }

  async fetchPosts(){
    let response = await PostModel.city(this.props.cityShow._id);
    this.setState({
      posts: response.data,
    });
  }

  render(){
    if(this.props.cityShow){

      let posts = this.state.posts.map(post =>
        <CityPost
          key={post._id}
          post={post}
          fetchPosts={this.fetchPosts}
          />
      )

      return(
        <div className="shadow">
          <div className="row">
            <div className="col m-3">
              <h2>{this.props.cityShow.name}</h2>
              <button className="btn btn-outline-primary align-self-end">Add a Post</button>
            </div>
            <div className="col m-3">
              <img
                className="rounded-lg"
                src={this.props.cityShow.images.header.src}
                alt={this.props.cityShow.name}
                />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {posts}
            </div>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="shadow">
          <div className="row">
            <div className="col m-3">
              <h2>Choose a City</h2>
            </div>
          </div>
        </div>
      )
    }
}
}


export default CityShow;
