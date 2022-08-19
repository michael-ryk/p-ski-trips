import Trips from './Components/Trips';
import DUMMYLIST from './DummyData/DUMMYLIST';

import './App.css';

function App() {
  return (
    <main>
      <Trips trips={DUMMYLIST}/>
    </main>
  );
}

export default App;
