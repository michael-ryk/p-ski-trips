import { useState } from 'react';

import Trips from './Components/Trips';
import DUMMYLIST from './DummyData/DUMMYLIST';

import './App.css';

function App() {

  const [tripsList, setTripsList] = useState(DUMMYLIST)

  return (
    <main>
      <Trips trips={tripsList}/>
    </main>
  );
}

export default App;
