import React, { Component } from 'react';
import PostModel from '../models/post';
import Post from '../components/Post'

class ProfilePosts extends Component {
    state = {
        user: this.props.user,
        posts: []
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        PostModel.user().then((res) => {
            this.setState({
                posts: res.data
            });
        });
    }

    render() {
        let posts = this.state.posts.map((post) => {
        return (
            <Post
                key={post._id}
                post={post}
            /> 
        );
    });
    return (
        <div>
            {posts}
        </div>
    );
}

}

export default ProfilePosts;


