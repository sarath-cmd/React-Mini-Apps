import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Maxcountgame from './components/Maxcountgame';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import Messagefeed from './components/Messagefeed'
import Reactiontimegame from './components/Reactiontimegame'

function App() {
  return (
    <div className='overscroll-none select-none'>
    <Navigation />
    <Routes>
      <Route path="/" element={<Maxcountgame />} />
      <Route path="/Clock" element={<Clock />} />
      <Route path="/Stopwatch" element={<Stopwatch />} />
      <Route path="/Messagefeed" element={<Messagefeed />} />
      <Route path="/Reactiontimegame" element={<Reactiontimegame />} />
    </Routes>
  </div>
  );
}

export default App;
