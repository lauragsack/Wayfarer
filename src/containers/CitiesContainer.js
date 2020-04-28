import React, { Component } from 'react';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';

class CitiesContainer extends Component {
  state={
    cityId: this.props.match.params.id,
	}

  componentDidUpdate() {
    let cityId = this.props.match.params.id
    if(cityId !== this.state.cityId){
      this.setState({
        cityId,
        city: this.props.cityList.find( city =>
            city._id === cityId
          ),
      });
    }
  }

  render() {
    return (
      <div className="cityContainer row">
        <div className="col-lg-4">
          <CityList
            cityList={this.props.cityList}
            cityId={this.cityId}
            />
        </div>
        <div className="col-lg-8">
          <CityShow
            city={this.state.city}
            cityList={this.props.cityList}
            />
        </div>
      </div>
    );
  }
}

export default CitiesContainer;
