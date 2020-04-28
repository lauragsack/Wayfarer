import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";


class CityPost extends Component {

  setAction(event){
    this.props.setAction(
      event.target.name,
      this.props.post
     );
  }

  render () {
    return (
      <div className="card">
        <h5 className="card-header">
          <p><Link to={`/posts/{this.props.post._id}`}>
            {this.props.post.title}
          </Link></p>
        </h5>
        <div className="card-body">
          <p className="card-text">{this.props.post.content}</p>
        </div>
        <div className="card-footer text-muted">
          <p className="card-text">Posted by {this.props.post.user.name}</p>
          <button
            className="btn btn-info float right"
            name="edit"
            onClick={this.setAction.bind(this)}>
            Edit
          </button>
          <button
            className="btn btn-info float right"
            name="delete"
            onClick={this.setAction.bind(this)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default CityPost;
