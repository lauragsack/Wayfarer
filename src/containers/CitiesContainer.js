import React, { Component } from 'react';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';

class CitiesContainer extends Component {
  state={
    cityList: [],
    cityId: null,
	}

  componentDidMount() {
    this.setState({
      cityId: this.props.match.params.id,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    let newState = {};

    if(this.state.cityList !== this.props.cityList){
      newState.cityList = this.props.cityList;
    }

    if(this.state.cityId !== this.props.match.params.id){
      newState.cityId = this.props.match.params.id;
    }

    if(Object.values(newState).length){
      this.setState(newState);
    }
  }

  setCity(cityId){
    this.setState({
      cityId
    });
  }

  render() {
    let cityShow = this.state.cityList.find( city =>
      city._id === this.state.cityId
    )

    return (
      <div className="cityContainer row">
        <div className="col-lg-4 bg-yellow">
          <CityList
            cityList={this.state.cityList}
            cityId={this.cityId}
            setCity={this.setCity}
            />
        </div>
        <div className="col-lg-8 bg-yellow">
          <CityShow cityShow={cityShow}
          cityList={this.state.cityList}
          />
        </div>
      </div>
    );
  }
}

export default CitiesContainer;
