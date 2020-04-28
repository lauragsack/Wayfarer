import React, { Component } from 'react';
import PostModel from '../models/post';
import CityPost from '../components/post/CityPost';
import PostForm from '../components/post/PostForm';

class PostsContainer extends Component{
  state = {
    action: 'close',
    post: null,
  }

  setAction(action, post){
    this.setState({
      action,
      post,
    });
  }

  setActionCreate(){
    this.setState({
      action: 'create',
      post: null,
    });
  }

  async createPost(post){
    console.log('create');
    console.log(post);
    await PostModel.create(post);
    this.props.fetchPosts();
  }

  async editPost(post){
    this.props.fetchPosts();
  }

  async deletePost(post) {
    let res = await PostModel.delete(this.props.post._id);
    if(!res.status === 200){
      console.log('error deleting post');
    }
    this.handleDeleteClose();
    this.props.fetchPosts();
  }

  closeForm(){
    this.setState({
      action: 'close',
      post: null,
    })
  }

  postMethods = {
    create: this.createPost.bind(this),
    edit: this.editPost.bind(this),
    delete: this.deletePost.bind(this),
    close: this.closeForm.bind(this),
  }

  render(){
    let posts = this.props.posts.map(post =>
      <CityPost
        key={post._id}
        post={post}
        setAction={this.setAction.bind(this)}
        />
    );

    let form = <div/>
    if (this.state.action !== 'close'){
      form = <PostForm
        city={this.props.city._id}
        post={this.state.post}
        action={this.state.action}
        cityList={this.props.cityList}
        postMethods={this.postMethods}
        />
    }

    return(
      <div>
        <div className="row">
          <div className="col">
            <div className="navbar navbar-dark bg-dark">
              <div className="navbar-brand mr-auto">
                Posts
              </div>
              <button
                className="btn btn-light fas fa-plus"
                onClick={this.setActionCreate.bind(this)}
                />
            </div>
          </div>
        </div>
        {form}
        {posts}
      </div>
    );
  }
}

export default PostsContainer;
