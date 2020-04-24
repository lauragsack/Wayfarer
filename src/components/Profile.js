import React, {Component} from 'react';
import ProfileForm from './ProfileForm';


class Profile extends Component {
  state = {
    name: this.props.name,
    city: this.props.city,
    joinDate: this.props.joinDate,
    posts: this.props.posts,
    update: false,
  };

  render() {
    if(this.state.update){
      return(
        <div className="container mt-4">
          <ProfileForm
            name={this.state.name}
            city={this.state.city.name}
            posts={this.state.posts}
            updateProfile={this.props.updateProfile}
            />
        </div>
      )
    }
    else {
      return(
        <div className="container mt-4">
          <p>Name: {this.state.name}</p>
          <p>City: {this.state.city.name}</p>
          {/* <p>Date Joined: {this.state.city}</p> */}
          <p>Posts: {this.state.posts}</p>
          <button>Edit</button>
        </div>
      )
    }
  }
}

export default Profile;
