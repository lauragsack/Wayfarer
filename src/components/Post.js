import React from 'react';

const Post = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">{props.post.title}</h5>
      <div class="card-body">
        <p class="card-text">{props.post.content}</p>
        <p class="card-text">Posted by {props.post.user.name}</p>
      </div>
    </div>
  )
}

export default Post;
