import React, {Component} from 'react';

class EditPost extends Component{
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
    city: this.props.post.city,
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  componentDidMount(){
    PostModel.all()
    .then(data => {
      this.setState({
        postList: data.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
  render(){

    let postOptions = this.state.postList.map( (post, index) => {
      return(
        <option
          key={index}
          value={post._id}>{post.name}
          </option>
      );
    }
  );
  return(
    <div>
      <form>
        <label>Title:</label>
          <input type='text' name="title" placeholder="title" required value={this.props.post.title} onChange={this.handleChange}/>
          <label>Content:</label>
          <input type='text' name="title" placeholder="title" required value={this.props.post.content} onChange={this.handleChange}/>
          <label>City:</label>
          <input type='text' name="title" placeholder="title" required value={this.props.post.city} onChange={this.handleChange}/>
      </form>
    </div>
  )
  }
}
