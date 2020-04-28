import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import EditPostForm from './EditPostForm';
import DeletePostForm from './DeletePostForm';



class PostForm extends Component {

	emptyPost = {
		id: '',
		title: '',
		content: '',
		city: this.props.city,
	}

	state = {
		postForm: (<div/>),
		post: (this.props.post || this.emptyPost),
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

		this.setState({
			cityOptions
		});
	}

	buildForm(){
		let form = <div/>;
		switch (this.props.action){
			case 'create':
			case 'edit':
				form = <EditPostForm
					post={this.state.post}
					cityOptions={this.state.cityOptions}
					onInputChange={this.onInputChange.bind(this)}
					/>
				break;
			case 'delete':
				form = <DeletePostForm
					post={this.state.post}
					/>
				break;
			default:
		}

		return(form);
	}

	onInputChange = (event) => {
		let post = this.state.post;
		post[event.target.name]= event.target.value;

		this.setState({
			post
		});
	}

	submitForm = (event) => {
		event.preventDefault();
		this.props.postMethods[this.props.action](this.state.post);
	}

	closeForm(){
		this.props.postMethods.close();
	}

	render() {
		return (
			<div>
			{this.buildForm()}

			<Modal.Footer>
				<button
					className="btn text-secondary float-right"
					onClick={this.closeForm.bind(this)}>
					Cancel
				</button>
				<button
					type="submit"
					className="btn btn-outline-info float-right"
					onClick={this.submitForm}>
					Add
				</button>
			</Modal.Footer>
			</div>
		);
	}
}

export default PostForm;
