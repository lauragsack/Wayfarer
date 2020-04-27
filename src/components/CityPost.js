
import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
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

    let postDate = Intl.DateTimeFormat('en-US').format(new Date(this.props.post.createdAt));

    return (
      <div>
        <div className="card">
          <h5 className="card-header">
            <p>{this.props.post.title}</p>
          </h5>
          <div className="card-body">
            <p className="card-text">{this.props.post.content}</p>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">Posted by {this.props.post.user.name} on {postDate}</p>
            <button className="btn btn-info float right" onClick={this.handleEdit}>Edit</button>
            <button className="btn btn-info float right" onClick={this.handleDelete}>Delete</button>
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
            <button className="btn text-danger" onCLick={this.deletePost}>del Post</button>
            <button className="btn text-info" onClick={this.handleDeleteClose}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CityPost;
