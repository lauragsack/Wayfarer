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
      this.setState({
        city: this.props.city,
      })
      if(this.props.city){
        this.fetchPosts(this.props.city._id);
      }
      else{
        this.setState({
          props: [],
        });
      }
    }
  }

  async fetchPosts(cityId){
    let res = await PostModel.city(cityId);
    let posts = res.data.sort((a, b) => {
      a = (new Date(a.createdAt)).valueOf();
      b = (new Date(b.createdAt)).valueOf();
      return b - a;
    });
    this.setState({
      posts,
    });
  }

  render(){
    if(this.props.city){
      return(
        <div className="shadow rounded-bottom">
          <div className="row">
            <div className="col m-3">
              <h2>{this.props.city.name}</h2>
            </div>
            <div className="col m-3">
              <img
                className="rounded-lg shadow"
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
