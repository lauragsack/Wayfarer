import React from 'react';

const Slide = (props) => {
  return(
    <div className={`carousel-item ${props.active}`}>
      <img src={props.image} className="d-block w-100" alt={props.name}/>
      <div className="carousel-caption d-none d-md-block">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Slide;
