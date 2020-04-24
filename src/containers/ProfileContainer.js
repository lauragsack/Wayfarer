import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfileModel from '../models/profile';


class ProfileContainer extends Component {

	state={
	name: this.props.name,
	city:'Sannnn Bruno',
}

	render() {
		return(
			<div>
				<Profile
					name={this.state.name}
					city={this.state.city}
					 />

			</div>
			)
	}
}

export default ProfileContainer