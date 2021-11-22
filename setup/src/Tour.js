import React, { useState } from 'react';

// destructuring the tour variable information which is pulled from the API
const Tour = ({ id, image, info, price, name }) => {
  // displays the image, price, and name, info and button on the page with styling
  return (<article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{info}</p>
      <button className="delete-btn">not interested</button>
    </footer>
  </article>
  );
};

export default Tour;
