import React from 'react';

const PostShow = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">{props.post.title}</h5>
      <div class="card-body">
        <p class="card-text">{props.post.content}</p>
      </div>
        <div className="card-footer text-muted">
          <p class="card-text">Posted by {props.post.user}</p>
        </div>
    </div>
  )
}

export default PostShow;