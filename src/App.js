import './App.css';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

import Main from './Components/Main/Main';
import Pizza from './Components/Pizza/Pizza';

import { Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: "#F46D40",
      light: "#42a5f5",
      contrastText: "#fff",
      hover: {
        '&:hover': {
          backgroundColor: "red",
        },
      },
      
    },
    secondary: {
      main: "#FF9846",
    },
    action: {
      active: "#000000",
      hover: "43a047",
      hoverOpacity: 1,
    },
    
  },

})


function App() {
  console.log(theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
