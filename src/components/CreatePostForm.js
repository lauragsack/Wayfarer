import React, { Component } from 'react';

class CreatePostForm extends Component {
    state = {
        title: '',
        content: '',
        city: this.props.city,
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let post = this.state.post;
        this.props.createPost(post);
        this.setState({
            title: '',
            content: '',
            city: '',
            cityList: [],
        })
    }

    componentDidMount(){
        CityModel.all()
        .then(data => {
          this.setState({
            cityList: data.data,
          });
        })
        .catch(err => {
          console.log(err);
        });
      }
    
    render() {
        let cityOptions = this.state.cityList.map( (city, index) => {
          return(
            <option
              key={index}
              value={city._id}>{city.name}</option>
          );
        }
      );
    
      if (this.state.city.id === -1){
        cityOptions.unshift(
          <option key={-1}></option>
        )
      }

    return (
        <form onSubmit={this.onFormSubmit} id="postForm">
            <div className="form-group">
                <label htmlFor="city">City</label>
                <select
                    onChange={this.onInputChange}
                    name="city"
                    value={this.state.city.id}
                >
                {Cityoptions}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    onChange={this.onInputChange}
                    type="text"
                    name="title"
                    value={this.state.title}
                />
            </div>
            <div className="form-group">
                <label htmlFor="content"></label>
                <textarea
                    rows="5"
                    onChange={this.onInputChange}
                    type="text"
                    name="content"
                    value={this.state.content}
                />
            </div>

                <button type="submit" id="addPost" className="btn">Add Post</button>
        </form>
        );
    }
}

export default CreatePostForm;
