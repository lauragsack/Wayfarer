import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Post = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">
        {/* <a href="/posts/:id">{props.post.title}</a> */}
        <p><Link to={`/posts/${props.post._id}`}>{props.post.title}</Link></p>
      </h5>
      <div class="card-body">
        <p class="card-text">{props.post.content}</p>
      </div>
        <div className="card-footer text-muted">
          <p class="card-text">Posted by {props.post.user.name}</p>
        </div>
    </div>
  )
}

export default Post;
