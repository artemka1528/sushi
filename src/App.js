import "./App.css";

import React, { useContext, useState } from "react";

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

import CssBaseline from "@mui/material/CssBaseline";

import RightSidebar from "./Components/RightSidebar/RightSidebar";

import CardProduct from './Components/CardProduct/CardProduct';

import Footer from './Components/Footer/Footer';

export const CardContext = React.createContext([]);
export const DisContext = React.createContext();

function App() {
  console.log(Theme);

  const [cardContext, setCardContext] = useState([]);
  const [disBtnContext, setBtnContext] = useState(false);
  return (
    <CardContext.Provider value={{ cardContext, setCardContext }}>
      <DisContext.Provider value={[ disBtnContext, setBtnContext ]}>
        <div className="App">
          <CssBaseline />
          <ThemeProvider theme={Theme}>
            <Container maxWidth="xxl">
              <Grid columns={16} container
              sx={{gridTemplateRows: "1fr",}}
              >
                <Grid item>
                  <LeftSidebar />
                </Grid>
                <Grid
                  item
                  xxl={11}
                  sx={{
                    backgroundColor: "#F2F2F2",
                    maxWidth: "1120px !important",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Header
                    city="Бишкек"
                    tel1="+996 705 188 955"
                    tel2="+996 555 188 955"
                  />

                  <Routes >
                    <Route path="/" element={<Main />} />
                    <Route path="/pizza" element={<Pizza />} />
                    <Route path="/Feedback" element={<Feedback />} />
                    <Route path="/Set" element={<Set />} />
                    <Route path="/CardProduct/:id" element={<CardProduct />} />
                  </Routes>
                  <Footer />
                </Grid>
                <Grid item sx={{ paddingLeft: "40px", paddingTop: "55px" }}>
                  <RightSidebar />
                </Grid>
              </Grid>
            </Container>
          </ThemeProvider>
        </div>
      </DisContext.Provider>
    </CardContext.Provider>
  );
}

export default App;
