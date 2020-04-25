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
        })
    }

    // TODO: update return section
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} id="postForm">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newPost"
                    />
                    <button type="submit" id="addPost" className="btn">Add Post</button>
                </form>
            </div>
        );
    }
}

export default CreatePostForm;
