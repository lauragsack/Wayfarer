import React, { Component } from 'react';
<<<<<<< Updated upstream
import CityModel from '../models/city';
import City from './City';

class Cities extends Component {
    state = {
        cities: []
    }

    componentDidMount() {
        this.fetchData();
    };
=======
import CityList from './CityList';
import CityShow from './CityShow';

class Cities extends Component {
  state = {
    cities: [],
    show: false
  }

  display = () => this.setState({show: true})

  componentDidMount() {
    this.fetchCities();
  };
>>>>>>> Stashed changes

  fetchCities = () => {
    CityModel.all().then((res) => {
      this.setState({
        cities: res.data
      });
    });
  }

<<<<<<< Updated upstream
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
=======
  render() {
    let cities = this.state.cities.map((city) => {
      return (
        <CityList
          key={city._id}
          city={city}
          display={this.display}
          />
      );
    });

    //     let cts = this.state.cities.map((city) => {
    //         return(
    //         <CityShow
    //             key={city.id}
    //             city={city}
    //             show={this.state.show}
    //         />
    //     );
    // });

    let view=null
    this.state.cities.map((city) => {
      if (this.state.show){
        view= (<CityShow
          key={city._id}
          city={city}
          show={this.state.show}
          />)
        }
      }
    );



    return (
      <div>
        <div className="sidebar">
          <List disablePadding dense>
            {cities}
          </List>
>>>>>>> Stashed changes
        </div>
        {view}
      </div>
    );
  }
}

export default Cities;
