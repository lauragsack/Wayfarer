import React from 'react'
import { Link } from 'react-router-dom';

function CityListItem(props){
  let current = props.cityId === props.city._id ? <i className="fas fa-angle-right ml-2"></i> : '';
  return(
    <li
      className="card rounded border-light mt-3 mx-3 bg-light">
      <Link
        to={`/cities/${props.city._id}`}
        className="row"
        >
        <div className="col-4">
          <img
            className="rounded shadow-sm"
            src={props.city.images.icon.src}
            alt={props.city.name} />
        </div>
        <div className="col-8 h-100 d-flex">
          <h4 className="text-dark align-self-center">
            {props.city.name}
            {current}
          </h4>
        </div>
      </Link>
    </li>
  );
}


export default CityListItem;
