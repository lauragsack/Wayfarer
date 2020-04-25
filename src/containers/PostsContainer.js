import React, { Component } from 'react';
import PostModel from '../models/post';
import Posts from '../components/Posts';
import CreatePostForm from '../components/CreatePostForm';

class PostsContainer extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        PostModel.all().then((res) => {
            this.setState({
                posts: res.data.posts
            });
        });
    }

    createPost = (post) => {
        let newPost = {
            title: post,
            content: post,
            // city: post, ?
            // author: currentUser
        };
        PostModel.create(newPost).then((res) => {
            let posts = this.state.posts;
            posts.push(res.data)
            this.setState({posts: posts});
        });
    };

    deletePost = (post) => {
        PostModel.delete(post).then((res) => {
            let posts = this.state.posts.filter((post) => {
                return post._id !== res.data._id;
            });
            this.setState({posts})
        })
    }

    updatePost = (post) => {
        const isUpdatedPost = p => {
            return p._id === post._id;
        };
        PostModel.update(post)
            .then((res) => {
                let posts = this.state.posts;
                posts.find(isUpdatedPost).title = post.title;
                posts.find(isUpdatedPost).content = post.content;
                this.setState({posts: posts})
            });
    }

    render() {
        return (
            <div className="postsComponent">
                <CreatePostForm
                    createPost={this.createPost}
                />
                <Posts
                    posts={this.state.posts}
                    updatePost={this.updatePost}
                    deletePost={this.deletePost}
                />
            </div>
        );
    }
}

export default PostsContainer;
