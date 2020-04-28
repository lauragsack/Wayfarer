import React from 'react'
import { Link } from 'react-router-dom';

function CityListItem(props){
  if(props.cityId === props.city._id){
    console.log(props.city.name, 'bg-dark');
  }
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
        <div className="col-8 h-100 align-middle">
          <h4 className="text-dark">{props.city.name}</h4>
        </div>
      </Link>
    </li>
  );
}


export default CityListItem;
