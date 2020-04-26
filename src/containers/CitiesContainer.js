import React, { Component } from 'react';
import CityModel from '../models/city';
import Cities from '../components/Cities';

class CitiesContainer extends Component {
    state = {
        cities: []
        //need to replace data with data from seed file to test
    }


    render() {
        return (
            <div className="cityComponent">
                <Cities
                    cities={this.state.cities}
                />
            </div>
        );
    }
  }

export default CitiesContainer;
