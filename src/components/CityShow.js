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
    if(this.state.city !== prevState.city){
      this.fetchPosts();
    }
  }

  async fetchPosts(){
    let posts = [];
    if (this.state.city){
      let res = await PostModel.city(this.state.city._id);
      posts = res.data;
    }
    this.setState({
      posts: posts,
    });
  }

  render(){
    if(this.state.city){
      let posts = this.state.posts.map(post =>
        <CityPost
          key={post._id}
          post={post}
          fetchPosts={this.fetchPosts.bind(this)}
          />
      );

      return(
        <div className="shadow">
          <div className="row">
            <div className="col m-3">
              <h2>{this.props.cityShow.name}</h2>
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
