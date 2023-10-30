import logo from './logo.svg';
import './App.css';
import Tours from './Components/Tours';
import data from './data';
import { useState } from 'react';
function App() {
  const [tours,setTours] =useState(data);

  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTours(newTour);
  }

  if(tours.length===0){
    return(
      <div>
        <h2>No Tour is Left</h2>
        <button onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div >
        <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
