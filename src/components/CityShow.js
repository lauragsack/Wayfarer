import React from 'react';
import CityPost from './CityPost';


function CityShow(props){
  if(props.cityShow){
    return(
      <div className="shadow">
        <div className="row">
          <div className="col m-3">
            <h2>{props.cityShow.name}</h2>
          </div>
          <div className="col m-3">
            <img
              className="rounded-lg"
              src={props.cityShow.images.header.src}
              alt={props.cityShow.name}
              />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CityPost />
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="shadow">
        <div className="row">
          <div className="col m-3">
            <h2>'Choose a City'</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default CityShow;
