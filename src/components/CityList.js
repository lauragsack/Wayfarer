
import React, { Component } from 'react';
import CityListItem from './CityListItem';
import '../styles.css'

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
				<h4 className="citytitle text-center pt-3 pb-2">C I T I E S</h4>
				<ul className="list-group">
					{listItems}
				</ul>
			</div>
	  );
	}
}

export default CityList;
