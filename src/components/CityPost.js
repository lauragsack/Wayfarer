import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import Modal from "react-bootstrap/Modal";
import EditPostForm from '../components/EditPostForm';
import PostModel from '../models/post'

import "bootstrap/dist/css/bootstrap.min.css";

class CityPost extends Component {
  state = {
    del: false,
    edit: false,
  }

  handleDeleteClose = () => {this.setState({del: false})}
  handleDelete = () => {this.setState({del: true})}
  handleEditClose = () => {this.setState({edit: false})}
  handleEdit = () => {this.setState({edit: true})}

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
          <button className="btn btn-info float right" onClick={this.handleEdit}>Edit</button>
          <button className="btn btn-info float right" onClick={this.handleDelete}>Delete</button>
          </div>
          </div>
          <Modal id="editModal" show={edit} onHide={this.handleEditClose}>
          <Modal.Body>
          <p>Edit a post.</p>
          <EditPostForm post={this.props.post} cityList={this.props.cityList}/>
          </Modal.Body>
          <Modal.Footer>
          <button className="btn text-info" onClick={this.handleEditClose}>Cancel</button>
          <button className="btn text-danger" onClick={this.editPost}>Submit</button>
          </Modal.Footer>
          </Modal>
          <Modal id="delModal" show={del} onHide={this.handleDeleteClose}>
          <Modal.Body>
          <p>{`Are you sure you want to delete "${this.props.post.title}"?`}</p>
          </Modal.Body>
          <Modal.Footer>
          <button className="btn text-danger" onClick={this.deletePost.bind(this)}>Delete Post</button>
          <button className="btn text-info" onClick={this.handleDeleteClose}>Cancel</button>
          </Modal.Footer>
          </Modal>
          </div>
        );
      }
    }

export default CityPost;
