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
    console.log(post);
    this.setState({
      action,
      post,
    });
  }

  setActionCreate(){
    this.setState({
      action: 'create',
      post: {
        id: '',
        title: '',
        content: '',
        city: (this.props.city ? this.props.city._id : ''),
      }
    });
  }

  async createPost(post){
    let res = await PostModel.create(post);
  }

  async editPost(post){
    let res = await PostModel.update(post);
  }

  async deletePost(post) {
    let res = await PostModel.delete(post._id);
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

    let form = <PostForm
        city={this.props.city}
        post={this.state.post}
        action={this.state.action}
        cityList={this.props.cityList}
        postMethods={this.postMethods}
        />

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
