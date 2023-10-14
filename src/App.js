import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/myProfile/MyProfile';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
