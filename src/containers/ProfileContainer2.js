import React, { Component } from 'react';
import Profile from '../components/Profile2';
import profile from '../models/profile';

class ProfileContainer2 extends Component {
    state = {
        name: this.props.currentUser.name,
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ProfileContainer2;
