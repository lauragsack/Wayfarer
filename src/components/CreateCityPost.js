import React, { Component } from 'react';
import CityModel from '../models/city'
import Modal from "react-bootstrap/Modal";


class CreateCityPost extends Component {
	state = {
		title: '',
		content: '',
		cityId: this.props.city._id,
	};

	onInputChange = (event) => {
		console.log(event.target.name,event.target.value)
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
		return (
			<form onSubmit={this.onFormSubmit} id="postForm">
				<Modal.Body>
					<div className="form-group">
						<label htmlFor="city">City</label>
						<select
							onChange={this.onInputChange}
							name="cityId"
							value={this.state.cityId}
							>
							{cityOptions}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							onChange={this.onInputChange}
							type="text"
							name="title"
							value={this.state.title}
							/>
					</div>
					<div className="form-group">
						<label htmlFor="content"></label>
						<textarea
							rows="5"
							onChange={this.onInputChange}
							type="text"
							name="content"
							value={this.state.content}
							/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn text-secondary float-right" onClick={this.props.handleCloseAddPost}>Cancel</button>
					<button type="submit" className="btn btn-outline-info float-right" onSubmit={this.onFormSubmit} onClick={this.props.handleCloseAddPost}>Add</button>
				</Modal.Footer>
			</form>
		);
	}
}

export default CreateCityPost
