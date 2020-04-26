import React, { Component } from 'react';
import CityModel from '../models/city';
import City from './City';

class Cities extends Component {
    state = {
        cities: []
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        CityModel.all().then((res) => {
            console.log(res.data)
            this.setState({
                cities: res.data
            });
        });
    }

    render() {
        let cities = this.state.cities.map((city) => {
        return (
            <City
                key={city._id}
                city={city}
            /> 
        );
    });
    return (
        <div>
            {cities}
        </div>
    );
}

}

export default Cities;