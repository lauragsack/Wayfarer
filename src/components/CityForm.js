import React, { Component } from 'react';

class CityForm extends Component {

	render() {
		return (
			<div show={this.props.show}>
				<h1>{this.props.city.name}</h1>
				<img src={this.props.city.image}/>
			</div>
		);
	}
}

export default CityForm