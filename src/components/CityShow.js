import React, { Component } from 'react';
import CityPost from './CityPost';
import PostModel from '../models/post'
import CreateCityPost from './CreateCityPost'

import Modal from "react-bootstrap/Modal";
import '../styles.css'



class CityShow extends Component {
  state = {
    city: null,
    posts: [],
    show: false,
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

  async createPost(post){
    await PostModel.create(post);
    this.fetchPosts();
  }

  handleCloseAddPost = () => this.setState({show: false});
  handleAddPost = () => this.setState({show: true});

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
        <>
        <div className="shadow">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div>
                <img
                  className="w-100 img-responsive"
                  src={this.props.cityShow.images.header.src}
                  alt={this.props.cityShow.name}
                  />
              </div>
              <div className="carousel-caption shadow">
                <h2 className="font-weight-bold sansserif">{this.props.cityShow.name}</h2>
                <button className="btn btn-outline-light" onClick={this.handleAddPost}>Add a Post</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {posts}
            </div>
          </div>
        </div>

      <Modal show={this.state.show} onHide={this.handleCloseAddPost}>
          <CreateCityPost
            city={this.state.city}
            createPost={this.createPost.bind(this)}
            handleCloseAddPost={this.handleCloseAddPost}
            cityList={this.props.cityList}
             />
            }
      </Modal>
      </>
      );
    }
    else{
      return(
        <div className="shadow">
          <div className="row">
            <div className="col-md-12 pt-3 pb-2">
              <h4 className="choosecity text-center">Choose a City</h4>
            </div>
          </div>
        </div>
      )
    }
}
}


export default CityShow;
