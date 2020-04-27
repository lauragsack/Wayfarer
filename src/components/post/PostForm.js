import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';
import DeletePostForm from './DeletePostForm';


class PostForm extends Component {
	state = {
		postForm: <div/>,
		title: '',
		content: '',
		// city: this.props.post.city,
	};

	componentDidMount() {
		let cityOptions = this.props.cityList.map( (city, index) => {
			return(
				<option
					key={index}
					value={city._id}
					>
					{city.name}
				</option>
			);
		});

		let form = <div/>
		switch (this.props.modalForm){
			case 'edit':
				form = <EditPostForm
					post={this.props.post}
					cityOptions={cityOptions}
					onFormSubmit={this.onFormSubmit.bind(this)}
					onInputChange={this.onInputChange.bind(this)}
					/>
				break;
			case 'delete':
				form = <DeletePostForm
					post={this.props.post}
					onFormSubmit={this.onFormSubmit.bind(this)}
					/>
				break;
			case 'create':
				form = <CreatePostForm
					cityOptions={cityOptions}
					onFormSubmit={this.onFormSubmit.bind(this)}
					onInputChange={this.onInputChange.bind(this)}
					/>;
				break;
			default:
				return (form);
		}

		this.setState({
			postForm: form
		});
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	onFormSubmit = (event) => {
		console.log(this.state)
		event.preventDefault();
		let post = this.state;
		this.props.createPost(post);
		// this.setState({
		// 	title: '',
		// 	content: '',
		// 	city: '',
		// })
	}

	render() {


		return (
			<div>
			{this.state.postForm}

			<Modal.Footer>
			<button className="btn text-secondary float-right" onClick={this.props.handleCloseAddPost}>Cancel</button>
			<button type="submit" className="btn btn-outline-info float-right" onSubmit={this.onFormSubmit} onClick={this.props.handleCloseAddPost}>Add</button>
			</Modal.Footer>
			</div>
		);
	}
}

export default PostForm;
