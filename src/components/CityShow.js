import React, { Component } from 'react';
// import Modal from "react-bootstrap/Modal";
import PostModel from '../models/post';
import PostsContainer from '../containers/PostsContainer'

class CityShow extends Component {
  state = {
    city: this.props.city,
    posts: [],
  }

  componentDidUpdate() {
    if(this.state.city !== this.props.city){
      console.log('update');
      this.setState({
        city: this.props.city,
      })
      this.fetchPosts(this.props.city._id);
    }
  }

  async fetchPosts(cityId){
    let response = await PostModel.city(cityId);
    this.setState({
      posts: response.data,
    });
  }

  render(){
    if(this.props.city){
      return(
        <div className="shadow">
          <div className="row">
            <div className="col m-3">
              <h2>{this.props.city.name}</h2>
            </div>
            <div className="col m-3">
              <img
                className="rounded-lg"
                src={this.props.city.images.header.src}
                alt={this.props.city.name}
                />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PostsContainer
                city={this.state.city}
                cityList={this.props.cityList}
                posts={this.state.posts}
                fetchPosts={this.fetchPosts.bind(this)}
                />
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


// <Modal show={this.state.show} onHide={this.handleCloseAddPost}>
//     <CreateCityPost
//       city={this.state.city}
//       createPost={this.createPost.bind(this)}
//       handleCloseAddPost={this.handleCloseAddPost}
//       cityList={this.props.cityList}
//        />
//       }
// </Modal>
