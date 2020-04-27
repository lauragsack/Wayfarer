import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import Modal from "react-bootstrap/Modal";
import PostForm from '../components/post/PostForm';
import PostModel from '../models/post'

import "bootstrap/dist/css/bootstrap.min.css";

class CityPost extends Component {
  state = {
    postForm: 'closed',
  }

  openEdit = () => {this.setState({postForm: 'edit'})}

  openDelete = () => {this.setState({postForm: 'delete'})}

  closeForm = () => {this.setState({postForm: 'closed'})}


  async editPost(event){
    event.preventDefault();
    console.log('test edit');
    // await PostModel.update(this.props.posts);
    //     this.handleEditClose();
    //     this.props.fetchPosts();
  }

  async deletePost(post) {
    let res = await PostModel.delete(this.props.post._id);
      if(!res.status === 200){
        console.log('error deleting post');
      }
      this.handleDeleteClose();
      this.props.fetchPosts();
  }

  render () {
    const {edit, del} = this.state;
    return (
      <div>
        <div className="card">
          <h5 className="card-header">
            <p><Link to={`/posts/${this.props.post._id}`}>{this.props.post.title}</Link></p>
          </h5>
          <div className="card-body">
            <p className="card-text">{this.props.post.content}</p>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">Posted by {this.props.post.user.name}</p>
            <button className="btn btn-info float right" onClick={this.openEdit}>Edit</button>
            <button className="btn btn-info float right" onClick={this.openDelete}>Delete</button>
          </div>
        </div>
        <PostForm
          postForm={this.state.postForm}
          post={this.props.post}
          cityList={this.props.cityList}
          />
      </div>
    );
  }

}

export default CityPost;

// <Edit post={this.props.post} cityList={this.props.cityList}/>
// <p>{`Are you sure you want to delete "${this.props.post.title}"?`}</p>
