import React from 'react';

function EditPostForm(props){
  return(
    <div>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Title"><strong>Title</strong></label>
        <div>
        <input
          onChange={props.onInputChange}
          name="title"
          value={props.post.title}
          placeholder="Enter a post title."
          />
        <small id="postTitleHelp" className="form-text text-muted">Post titles must be between 1 and 200 characters long.</small>
      </div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="City"><strong>City</strong></label>
        <div>
        <select
          onChange={props.onInputChange}
          name="city"
          value={props.post.city}
          >
          {props.cityOptions}
        </select>
        <small className="form-text text-muted">Select a city.</small>
        </div>
      </div>
      <hr/>
      <div className="form-group mt-4 ml-5">
        <label htmlFor="Content align-top"><strong>Content</strong></label>
        <div>
        <textarea
          rows="5"
          onChange={props.onInputChange}
          type="text"
          name="content"
          value={props.post.content}
          placeholder= "Enter text here."></textarea>
        <small className="form-text text-muted">Enter your post content here.</small>
        </div>
      </div>
    </div>
  );
}

export default EditPostForm;
