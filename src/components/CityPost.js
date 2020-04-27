import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import Modal from 'react-bootstrap-modal';
import EditPostForm from '../components/EditPostForm';

import "bootstrap/dist/css/bootstrap.min.css";

class CityPost extends Component {
    state = {
        delete: false,
        edit: false,
        postId: null,
        post: null
    }

    handleDeleteClose = () => {this.setState({delete: false})}
    handleDelete = () => {this.setState({delete: true})}
    handleEditClose = () => {this.setState({edit: false})}
    handleEdit = () => {this.setState({edit: true})}

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
        const {edit, delete} = this.state;
        return (
            <>
                <div className="card">
                    <h5 className="card-header">
                        <p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{props.post.content}</p>
                    </div>
                        <div className="card-footer text-muted">
                        <p className="card-text">Posted by {props.post.user.name}</p>
                        <button className="btn btn-info float right" onClick={this.handleEdit}>Edit</button>
                        <button className="btn btn-info float right" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
                <Modal id="editModal" show={edit} onHide={this.handleEditClose}>
                    <Modal.Body>
                        <p>testing</p>
                        <EditPostForm onClick={this.handle}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button >Submit</button>
                    </Modal.Footer>
                </Modal>
                <Modal id="delModal" show={delete} onHide={this.handleDeleteClose}>
                    <Modal.Body>
                        <p>testing</p>
                        <p>{`Are you sure you want to delete ${this.state.post.title}`}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn text-danger" onCLick={this.deletePost}>Delete Post</button>
                        <button className="btn text-info" onClick={this.handleDeleteClose}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
     }
}

export default CityPost;