import React, {Component} from 'react';
import PostModel from '../models/post';

class EditPostForm extends Component{
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
    city: this.props.post.city,

  }
  //fetching data to edit done in citypost

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

// onFormSubmit = (event) => {
//   event.preventDefault();
//   let post = this.state
//   this.props.editPost(post);
// }
  render(){
    let cityOptions = this.props.cityList.map( (city, index) => {
      return(
        <option
          key={city._id}
          value={city._id}>{city.name}
          </option>
      );
    }
  );
  return(
    <div>
      <form onSubmit={this.onFormSubmit} id="postForm">
      <div className="form-group">
            <label htmlFor="Title">Title</label>
            <input
              onChange={this.onInputChange}
              name="postId"
              value={this.state.title}
              placeholder="Enter a post title."
              />
            <small id="postTitleHelp" className="form-text text-muted">Post titles must be between 1 and 200 characters long.</small>
            </div>
{/* allows post location to be changed by user on modal*/}
        <div className="form-group">
              <label htmlFor="City">City</label>
              <select
              onChange={this.onInputChange}
              name="cityId"
              value={this.state.city._id}
              >
              {cityOptions}
              </select>
              <small className="form-text text-muted">Select a city.</small>
        </div>


        <div className="form-group">
          <label htmlFor="Content">Content</label>
          <textarea
          rows="5"
          onChange={this.onInputChange}
          type="text"
          name="content"
          value={this.state.content}
          placeholder= "Enter text here."></textarea>
          <small className="form-text text-muted">Enter your post content here.</small>
        </div>
      </form>
    </div>
  )
  }
}
export default EditPostForm;
