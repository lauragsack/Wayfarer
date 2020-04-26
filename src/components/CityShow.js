import React, {Component} from 'react';
import CityModel from '../models/city';


class CityShow extends Component {
  state = {
    cityId: this.props.key,
    city: "",
    show: this.props.show
  }

  // componentDidMount () {
  //   this.setState({
  //     cityId: this.props.match.params.id
  //   })
  // }

  // fetchCity = () => {
  //   CityModel.show(this.state.cityId).then((res) => {
  //     console.log(this.state.cityId)
  //     this.setState({
  //       city: res.data
  //     });
  //   });
  // }
  
  render() {
    return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <h1>{this.props.city.name}</h1>
      <img className="mb-5" src={this.props.city.image}/>
    </div>
  </div>
    )
  }
}


export default CityShow;