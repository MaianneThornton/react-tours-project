import React from 'react';
import Tour from './Tour';
// destructuring tours prop
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* returns an array of objects from the info pulled from the API */}
        {tours.map((tour) => {
          // returns the tour id as well as spreads the rest of the data (id, name, info, image & price from the API)
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        }
        )}
      </div>
    </section>
  );
};

export default Tours;
