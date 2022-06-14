import './App.css';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

import Main from './Components/Main/Main';
import Pizza from './Components/Pizza/Pizza';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pizza" element={<Pizza />} />
          
      </Routes>
    </div>
  );
}

export default App;
