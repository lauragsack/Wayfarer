import React, {Component} from 'react';
import PostModel from '../models/post';

class EditPostForm extends Component{
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
    city: this.props.post.city,
    cityList:[],
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
    let postOptions = this.state.cityList.map( (post, index) => {
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
      <div class="form-group">
            <label for="Title">Title</label>
            <input type="string" class="form-control" id="Post Title" aria-describedby="postTitleHelp" placeholder="Enter a post title." />
            <small id="postTitleHelp" class="form-text text-muted">Post titles must be between 1 and 200 characters long. </small>
            </div>

        <div class="form-group">
              <label for="City">City</label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>San Francisco</option>
                <option>London</option>
                <option>Gibraltar</option>
                <option>Paris</option>
                <option>Sydney</option>
              </select>
              <small id="postCityHelp" class="form-text text-muted">Select a city.</small>
        </div>

        <div class="form-group">
          <label for="Content">Content</label>
          <textarea class="form-control" id="Post content" rows="5" placeholder= "Enter text here."></textarea>
          <small id="postContentHelp" class="form-text text-muted">Enter your post content here.</small>
        </div>
      </form>
    </div>
  )
  }
}
export default EditPostForm;
