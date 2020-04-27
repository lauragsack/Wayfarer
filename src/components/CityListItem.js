import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CityListItem extends Component {

  render(){
    return(
      <li className="list-group-item m-3 shadow">
        <Link
          to={`/cities/${this.props.city._id}`}
           className="row"
           >
          <div className="col-4">
            <img
              className="rounded"
              src={this.props.city.images.icon.src}
              alt={this.props.city.name} />
          </div>
          <div className="col-8">
            <h4>{this.props.city.name}</h4>
          </div>
        </Link>
      </li>
    );
  }
}

export default CityListItem
