import "./App.css";

import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";

import Main from "./Components/Main/Main";
import Pizza from "./Components/Pizza/Pizza";
import Set from "./Components/Set/Set";
import Feedback from "./Components/Feedback/Feedback";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Header from "./Components/Header/Header";

import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { Theme } from "./Theme";

function App() {
  console.log(Theme);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Container maxWidth="xl">
          <Grid columns={16} container spacing={5}>
            <Grid item xs={2}>
              <LeftSidebar />
            </Grid>
            <Grid item xs={11} sx={{backgroundColor:'#F2F2F2'}}>
              <Header
                city="Бишкек"
                tel1="+996 705 188 955"
                tel2="+996 555 188 955"
              />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/Set" element={<Set />} />
              </Routes>
            </Grid>
            <Grid item xs={3}>
              right-sidebar
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
