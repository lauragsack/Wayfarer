import React, {Component} from 'react';
import UserModel from '../models/user';
import PostsContainer from '../containers/PostsContainer';
import ProfileForm from './ProfileForm';


class Profile extends Component {
    state = {
        name:this.props.name,
        city:this.props.city,
        posts:this.props.posts,
    };


    render() {
        return (
            // <div className="container mt-4">
            //     <p>Name: {this.state.name}</p>
            //     <p>City: {this.state.city}</p>
            //     {/* <p>Date Joined: {this.state.city}</p> */}
            //     <p>Posts: {this.state.posts}</p>
            //     <button>Edit</button>
            // </div>
            <div className="container mt-4">
                <ProfileForm
                    name={this.state.name}
                    city={this.state.city}
                    posts={this.state.posts}
                    updateProfile={this.props.updateProfile}
                />
            </div>
        );
    }
}

export default Profile;

