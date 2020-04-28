import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom'

const ProfilePost = (props) => {
  return (
    <div className="card mt-5 col-md-8 offset-2 pl-0 pr-0">
      <h5 className="card-header">
        <p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
      </h5>
      <div className="card-body">
        <p className="card-text">{props.post.content}</p>
      </div>
        <div className="card-footer text-muted">
          <p className="card-text">Posted by {props.post.user.name}</p>
        </div>
    </div>
  )
}

export default ProfilePost;
