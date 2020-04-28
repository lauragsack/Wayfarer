import React, { Component } from 'react';
import CityListItem from './CityListItem';

class CityList extends Component{

	render(){
		let listItems = this.props.cityList.map(city => {
			return (
				<CityListItem
					key={city._id}
					city={city}
					cityId={this.props.cityId}
					/>
			);
		});

	  return (
			<div className="shadow rounded-bottom">
				<h2 className="pt-3 px-3">Cities</h2>
				<ul className="list-group pb-3">
					{listItems}
				</ul>
			</div>
	  );
	}
}

export default CityList;
