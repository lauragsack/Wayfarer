import React, { Component, useReducer } from 'react';
import Profile2 from '../components/Profile2';
import ProfileModel from '../models/profile';

class ProfileContainer2 extends Component {
    state = {
        user: {
            name: this.props.currentUser.name,
            city: this.props.currentUser.city,
        }
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        ProfileModel.all().then((res) => {
            this.setState({
                name: res.data.name,
                city: res.data.city,
                // date joined once in model
            })
        })
    }

    updateProfile = (user) => {
        const isUpdatedUser = p => {
            return p._id === user._id;
        };
        ProfileModel.update(user)
            .then((res) => {
                let user =this.state.user;
                user.find(isUpdatedUser).name = user.name;
                user.find(isUpdatedUser).city = user.city;
                this.setState({user: user})
            });
    }

    render() {
        return (
            <div className="profileComponent">
                <Profile2
                    user={this.state.user}
                    updateProfile={this.updateProfile}
                />
            </div>
        );
    }
}

export default ProfileContainer2;
