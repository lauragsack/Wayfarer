import React, { Component } from 'react';
import CityModel from '../models/city';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';

class CitiesContainer extends Component {
  state={
    cityList: [],
    cityShow: '',
	}

  componentDidMount() {
    if(!this.state.cityList.length){
      this.fetchCityList();
    }

    this.setState({
      cityShow: this.props.match.params.id
    })

  }

  async fetchCityList(){
    let response = await CityModel.all();
    this.setState({
      cityList: response.data
    });
  }

  render() {
    return (
      <div className="cityContainer row">
        <div className="col-lg-4">
          <CityList
            cityList={this.state.cityList}
            />
        </div>
        <div className="col-lg-8">
          <CityShow />
        </div>
      </div>
    );
  }
}

export default CitiesContainer;
