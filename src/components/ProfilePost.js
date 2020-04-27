import React from 'react';

const ProfilePost = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">
        <p>{props.post.title}</p>
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
