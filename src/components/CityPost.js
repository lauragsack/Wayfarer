
import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
// import EditPostForm from '../components/EditPostForm';
import PostModel from '../models/post'

import "bootstrap/dist/css/bootstrap.min.css";

class CityPost extends Component {

  state = {
    del: false,
    edit: false,
    postId: null,
    post: null
  }

  handleDeleteClose = () => {this.setState({del: false})}
  handleDelete = () => {this.setState({del: true})}
  handleEditClose = () => {this.setState({edit: false})}
  handleEdit = () => {this.setState({edit: true})}

  async deletePost(post) {
    let res = await PostModel.delete(this.state.postId);
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
        <div className="card shadow col-md-10 offset-1 mt-2 mb-2 pl-0 pr-0">
          <h5 className="card-header">
            <p><Link to={`/posts/${this.props.post._id}`}>{this.props.post.title}</Link></p>
          </h5>
          <div className="card-body">
            <p className="card-text">{this.props.post.content}</p>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">Posted by {this.props.post.user.name}</p>
            <button className="btn btn-info float-right ml-2" onClick={this.handleDelete}>Delete</button>
            <button className="btn btn-info float-right" onClick={this.handleEdit}>Edit</button>
          </div>
        </div>
        <Modal id="editModal" show={edit} onHide={this.handleEditClose}>
          <Modal.Body>
            <p>testing</p>
            {/*<EditPostForm onClick={this.handle}/>*/}
          </Modal.Body>
          <Modal.Footer>
            <button >Submit</button>
          </Modal.Footer>
        </Modal>
        <Modal id="delModal" show={del} onHide={this.handleDeleteClose}>
          <Modal.Body>
            <p>testing</p>
            <p>{`Are you sure you want to delete ${this.props.post.title}`}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn text-danger" onClick={this.deletePost}>del Post</button>
            <button className="btn text-info" onClick={this.handleDeleteClose}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CityPost;
