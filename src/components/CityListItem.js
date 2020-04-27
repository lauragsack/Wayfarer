import React from 'react'
import { Link } from 'react-router-dom';

function CityListItem(props){
  return(
    <li className="list-group-item">
      <Link
        to={`/cities/${props.city._id}`}
        className="row"
        >
          <div className="col-4">
            <img
              className="rounded"
              src={props.city.images.icon.src}
              alt={props.city.name} />
          </div>
          <div class="col-8 title-text text-secondary">
            {props.city.name}
          </div>
      </Link>
    </li>
  );
}


export default CityListItem;
