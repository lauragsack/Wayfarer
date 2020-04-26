import React, {Component} from 'react';


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
      <div className="shadow">
        <h1>City</h1>
      </div>
    )
  }
}


export default CityShow;
