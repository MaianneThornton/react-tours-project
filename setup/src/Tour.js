import React, { useState } from 'react';

// destructuring the tour variable information which is pulled from the API
const Tour = ({ id, image, info, price, name, removeTour }) => {
  // sets the readMore state to a default of false
  const [readMore, setReadMore] = useState(false)
  // displays the image, price, and name, info and button on the page with styling
  return (<article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {/* Ternary that says if readMore is set to true display the entire string, if false only display up to the index of 200*/}
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        {/* toggles the value of readMore on each click */}
        <button onClick={() => setReadMore(!readMore)}>
          {/* ternary that reads if the button is set to read more then display show less, if not display read more */}
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>
  );
};

export default Tour;
