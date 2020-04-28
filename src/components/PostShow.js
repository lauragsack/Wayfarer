import React, {Component} from 'react';
import PostModel from '../models/post';
import CityModel from '../models/city'


class PostShow extends Component {
  state = {
    postId: null,
    post: {
      title: "",
      content: "",
      user: {
        name: ""
      },
    cityImg: "",
    cityName: "",
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

  async fetchPost() {
    let res = await PostModel.show(this.state.postId).then((res) => {
      this.setState({
        post: res.data
      });
      this.fetchCity();
    });
  }

  async fetchCity() {
    let res = await CityModel.show(this.state.post.city).then((res) => {
      this.setState({
        cityDetail: res.data.images.header.src,
        cityName: res.data.name
      });
    });
  }

  
  render() {
    return (
    <div className="card">
        <img className="card-img-top" src={`${this.state.cityDetail}`} alt={`${this.state.cityName}`}/>
      <div className="card-body">
        <h5 className="card-title">{this.state.post.title}</h5>
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

