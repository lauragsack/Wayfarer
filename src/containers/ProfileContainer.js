import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfileModel from '../models/profile';



class ProfileContainer extends Component {
	state={
		name: this.props.currentUser.name,
		city: this.props.currentUser.city,
		date: this.props.currentUser.joinDate,
		posts: this.props.posts,
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
		console.log(this.props);
		console.log(this.state);
		return(
			<div>
				<Profile
					name={this.state.name}
					city={this.state.city}
					date={this.state.date}
					posts={this.state.posts}
					updateProfile={this.updateProfile}
					/>
			</div>
		)
	}
}

export default ProfileContainer
