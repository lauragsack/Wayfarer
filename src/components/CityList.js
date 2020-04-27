import React, { Component } from 'react';
import CityListItem from './CityListItem';

class CityList extends Component{

	render(){
		let listItems = this.props.cityList.map(city => {
			return (
				<CityListItem
					key={city._id}
					city={city}
					setCity={this.props.setCity}
					/>
			);
		});

	  return (
			<div className="shadow">
				<h2 className="p-3">Cities</h2>
				<ul className="list-group">
					{listItems}
				</ul>
			</div>
	  );
	}
}

export default CityList;
