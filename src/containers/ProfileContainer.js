import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfileModel from '../models/profile';

let user1={
	name:'JC',
	city:'San Bruno',
	posts:[],
}

class ProfileContainer extends Component {

	render() {
		return(
			<div>
				<Profile
					name="JC"
					city="SAN BRUNO" />
			</div>
			)
	}
}

export default ProfileContainer