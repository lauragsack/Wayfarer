import React from 'react';
import '../styles.css'

const Slide = (props) => {
  return(
    <div className={`carousel-item ${props.active}`}>
      <img
        className="d-block w-100 rounded-lg"
        src={props.image}
        alt={props.name}
        />
      <div className="carousel-caption d-none d-md-block">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Slide;
