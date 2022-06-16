import './App.css';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

import Main from './Components/Main/Main';
import Pizza from './Components/Pizza/Pizza';

import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider } from '@mui/material';

import { Theme } from './Theme';



function App() {
  console.log(Theme);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
      </ThemeProvider>
      
      
    </div>
  );
}

export default App;
