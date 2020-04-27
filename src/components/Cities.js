import React, { Component } from 'react';

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

  // fetchCities = () => {
  //   CityModel.all().then((res) => {
  //     this.setState({
  //       cities: res.data
  //     });
  //   });
  // }

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
        </div>
        {view}
      </div>
    );
  }
}

export default Cities;
