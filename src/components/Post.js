import React from 'react';

const Post = (props) => {
  return (
    <div className="card">
    	<h5 className="card-header">{this.props.post.title}</h5>
      <div class="card-body">
        <p class="card-text">{this.props.post.content}</p>
      </div>
    </div>
  )
}

export default Post;
