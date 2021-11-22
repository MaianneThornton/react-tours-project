import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  // Default state will display loading.js
  const [loading, setLoading] = useState(true);
  // Default state will display an empty array
  const [tours, setTours] = useState([]);
  // if the id matches remove the tour if not place it in a new array called newTours 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    // if fetching tours always setLoading to true
    setLoading(true);

    try {
      // fetching data from the API
      const response = await fetch(url);
      // running the json to give the list of tours
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // sets the value of the setTours parameter to the tours variable
    } catch (error) {
      // setLoading to false and logs the error
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    // running the fetch tours function to see the array displayed in the console
    fetchTours();
  }, [])
  // if loading is true (fetching data), display loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // if loading is false (data has been fetched), display the Tours Component
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
