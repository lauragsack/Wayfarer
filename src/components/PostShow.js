import React, {Component} from 'react';
import PostModel from '../models/post';


class PostShow extends Component {
  state = {
    postId: null,
    post: {
      title: "",
      content: "",
      user: {
        name: ""
      }
    }
  }

  componentDidMount () {
    this.setState({
      postId: this.props.match.params.id
    })
  }

  componentDidUpdate () {
    if (this.state.post.title === "") {
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
  
  render() {
    return (
    <div className="card">
      <h5 className="card-header">{this.state.post.title}</h5>
      <div className="card-body">
        <p className="card-text">{this.state.post.content}</p>
      </div>
        <div className="card-footer text-muted">
          <p className="card-text">Posted by {this.state.post.user.name}</p>
        </div>
    </div>
    )
  }
}


export default PostShow;