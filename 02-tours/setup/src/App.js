import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (resp.status >= 200 && resp.status <= 299) {
        const data = await resp.json();
        setIsLoading(false);
        setTours(data);
      } else {
        setIsLoading(false);
        throw new Error(`Wrong API.`);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  //? OR

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => {
  //       if (resp.status >= 200 && resp.status <= 299) {
  //         return resp.json();
  //       } else {
  //         setIsLoading(false);
  //         throw new Error(`Wrong API.`);
  //       }
  //     })
  //     .then((tours) => {
  //       setTours(tours);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setIsLoading(true);
  //       console.error(err);
  //     });
  // }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left.</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Get new tours!
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
