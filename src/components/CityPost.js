import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom'
import Modal from 'react-bootstrap-modal';

import "bootstrap/dist/css/bootstrap.min.css";

class CityPost extends Component {
    state = {
        delete: false,
        postId: null,
        post: null
    }

    handleDeleteClose = () => {
        this.setState({delete: false})
    }

    handleDelete = () => {
        this.setState({delete: true})
    }

    componentDidMount () {
        this.setState({
            postId: this.props.match.params.id
        })
    }
    
    componentDidUpdate () {
    if (this.state.postId === null) {
        this.fetchPost();
    } 
    }
    
    fetchPost = () => {
    PostModel.show(this.state.postId).then((res) => {
        this.setState({
        post: res.data
        });
    });
    }

    deletePost = (post) => {
    PostModel.delete(this.state.postId).then((res) => {
        post: res.data
    });
    this.handleDeleteClose;
    }

    render () {
        return (
            <div className="card">
              <h5 className="card-header">
                <p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
              </h5>
              <div className="card-body">
                <p className="card-text">{props.post.content}</p>
              </div>
                <div className="card-footer text-muted">
                  <p className="card-text">Posted by {props.post.user.name}</p>
                  <button className="btn btn-info float right">Edit</button>
                  <button className="btn btn-info float right" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
            <Modal>
                <Modal.Body>
                    <p>testing</p>
                    <p>{`Are you sure you want to delete ${this.state.post.title}`}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn text-info" onCLick={this.deletePost}>Delete Post</button>
                    <button className="btn text-info" onClick={this.handleDeleteClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
        );
     }
}

export default CityPost;