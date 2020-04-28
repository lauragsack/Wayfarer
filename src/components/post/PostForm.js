import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import EditPostForm from './EditPostForm';
import DeletePostForm from './DeletePostForm';

class PostForm extends Component {

	state = {
		postForm: (<div/>),
		post: this.props.post,
	};

	componentDidMount() {
		let cityOptions = this.props.cityList.map( city => {
			return(
				<option
					key={city._id}
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

	componentDidUpdate(prevProps, prevState) {
	  if (this.state.post !== this.props.post){
			this.setState({
				post: this.props.post
			})
		}
	}

	buildForm(){
		let form = <div/>;
		if(this.state.post){
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

	async submitForm(event){
		event.preventDefault();
		await this.props.postMethods[this.props.action](
			this.state.post
		);
		this.closeForm();
	}

	closeForm(){
		this.props.postMethods.close();
	}

	render() {
		return (
			<Modal show={this.props.action !== 'close'}>
				test
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
						onClick={this.submitForm.bind(this)}>
						Submit
					</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default PostForm;
