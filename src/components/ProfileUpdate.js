import React, {Component} from 'react';
import CityModel from '../models/city'


class ProfileUpdate extends Component {
  state = {
    name: this.props.user.name,
    city: this.props.user.city,
    joinDate: Intl.DateTimeFormat('en-US').format(new Date(this.props.user.joinDate)),
    cityList: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    CityModel.all()
    .then(data => {
      this.setState({
        cityList: data.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    let cityOptions = this.state.cityList.map( (city, index) => {
      return(
        <option
          key={index}
          value={city._id}>{city.name}</option>
      );
    }
  );

  if (!this.state.city){
    cityOptions.unshift(
      <option key={-1}>Select a city...</option>
    )
  }

  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4 className="mb-3">
            Profile <i className='btn fas fa-times float-right'
            onClick={this.props.toggleUpdate}/>
        </h4>
        <small className="float-right">Joined {this.state.joinDate}</small>
        <form onSubmit={this.props.updateProfile}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control form-control-lg"
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Current city</label>
              <select
                onChange={this.handleChange}
                className="form-control form-control-lg custom-selectr"
                id="city"
                name="city"
                value={this.state.city}
                >
                {cityOptions}
              </select>
            </div>
            <button
              className="btn btn-primary float-right" type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
}

  export default ProfileUpdate
