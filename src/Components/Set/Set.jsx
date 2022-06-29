import React, { useState, useEffect } from "react";

import CardItem from "../Card/CardItem";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import { Container  } from '@mui/material';

import Selected from "../Selected/Selected";

function Set(props) {
  const [cards, setCards] = useState([]);
  const [defaultList, setDefault] = useState([]);
  useEffect(() => {
    async function getSet() {
      let response = await fetch('http://localhost:3001/set');
      let set = await response.json();
      setCards(set);
      setDefault(set);
    };
    getSet()
  }, [])
  console.log(cards);
  

  const sortPriceLow = (value) => {
    setCards([...cards].sort((a, b) => (a.price > b.price ? 1 : -1)));
  };
  const sortPriceHeight = () => {
    setCards([...cards].sort((a, b) => (a.price < b.price ? 1 : -1)));
  };
  const sortPieces = () => {
    setCards([...cards].sort((a, b) => (a.pieces > b.pieces ? 1 : -1)));
  };
  const sortName = () => {
    setCards([...cards].sort((a, b) => (a.name > b.name ? 1 : -1)));
  };
  const sortWeight = () => {
    setCards([...cards].sort((a, b) => (a.weight > b.weight ? 1 : -1)));
  };
  const sortDefault = () => {
    setCards(defaultList);
  };
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    if (event.target.value == "cheaper") {
      sortPriceLow(event.target.value);
    } else if (event.target.value == "expensive") {
      sortPriceHeight();
    } else if (event.target.value == "pieces") {
      sortPieces();
    } else if (event.target.value == "name") {
      sortName();
    } else if (event.target.value == "weight") {
      sortWeight();
    } else if (event.target.value == "default") {
      sortDefault();
    }
  };

  const [inCard, useInCard] = useState([])
  function addInCard(inCard) {
    console.log(inCard);
  }
  return (
    <Container  maxWidth="md">
      <Selected title='Сеты' value={value} handleChange={handleChange} />
      <Grid container spacing={2} sx={{mt: '30px'}}>
        {cards.map((item, index) => (
          <Grid key={index} item xs={4}>
            <CardItem
              name={item.name}
              pieces={item.pieces}
              weight={item.weight}
              price={item.price}
              want={item.want}
              addInCard={addInCard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Set;
