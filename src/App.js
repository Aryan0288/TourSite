import logo from './logo.svg';
import './App.css';
import Tours from './Components/Tours';
import data from './data';
import { useState } from 'react';
import Num from './Components/Num';
// import number from './data1';
function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }
  const number = [
    {
      one: '1',
      two: '2',
      three: '3',
      four: '4',
    },
    {
      one: '5',
      two: '6',
      three: '7',
      four: '8'
    }
  ];
  
  const [print,Setprint]=useState(number);
  if (tours.length === 0) {
    return (

      <div className='flex items-center justify-center text-black flex-col h-[100vh]'>
        <div>
          <h2 className='text-2xl font-bold'>No Tour is Left</h2>
        </div>
        <div>
          <button className='bg-slate-400 py-1 px-4 rounded-md m-2' onClick={() => setTours(data)}>
            Refresh
          </button>

        </div>
      </div>
    );
  }


  return (
    <div >
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {/* <Num print={print} /> */}
    </div>
  );
}

export default App;
