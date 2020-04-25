import React, {Component} from 'react';
import ProfileShow from '../components/ProfileShow';
import ProfileUpdate from '../components/ProfileUpdate';
import ProfilePosts from '../components/ProfilePosts';
import UserModel from '../models/user';

class ProfileContainer extends Component {
	state={
		user: this.props.currentUser,
		update: false,
	}

	updateProfile = (event) => {
		event.preventDefault();
		let data = {
			name: event.target.name.value,
			city: event.target.city.value,
		};

		UserModel.update(data)
		.then((res) => {
			this.props.setCurrentUser(res.data)
			this.setState({
				user: res.data,
				update: false,
			});
		});
	}

	toggleUpdate = () => {
		this.setState({
			update: !this.state.update,
		});
	}

	render() {
		let form = null;
		if (this.state.update){
			form = (
				<ProfileUpdate
					user={this.state.user}
					toggleUpdate={this.toggleUpdate}
					updateProfile={this.updateProfile}
					/>
			);
		}
		else {
			form = (
				<ProfileShow
					user={this.state.user}
					toggleUpdate={this.toggleUpdate}
					/>
			);
		}
		return (
			<div>
				{form}
				<ProfilePosts/>
			</div>
		)
	}
}

export default ProfileContainer
