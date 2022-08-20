import { useState } from 'react';

import Trips from './Components/Trips';
import DUMMYLIST from './DummyData/DUMMYLIST';

import './App.css';

function App() {

  const [tripsList, setTripsList] = useState(DUMMYLIST);

  const removeTrip = (id) => {
    const filteredList = tripsList.filter(trip => trip.id !== id);
    setTripsList(filteredList);
  }

  return (
    <main>
      <Trips trips={tripsList} removeTrip={removeTrip}/>
    </main>
  );
}

export default App;
