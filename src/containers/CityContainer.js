import React, { Component } from 'react';
import CityModel from '../models/city';
import City from '../components/City';

class CityContainer extends Component {
    state = {
        city: []
        //need to replace data with data from seed file to test
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        CityModel.all().then((res) => {
            this.setState({
                cities: res.data.cities
            });
        });
    }
    render() {
        return (
            <div className="cityComponent">
                <City
                    name={this.state.name}
                    image={this.state.image}
                />
            </div>
        );
    }
  }

export default CityContainer;
