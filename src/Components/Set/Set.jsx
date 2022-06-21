import React, { useState } from "react";

import CardItem from "../Card/CardItem";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import Selected from "../Selected/Selected";

function Set(props) {
  const [cards, setCards] = useState([
    {
      img: "/",
      name: "Саломон сет",
      pieces: "30",
      weight: "1050",
      price: "1500",
    },
    {
      img: "/",
      name: `Сет "5 Филадельфий"`,
      pieces: "40",
      weight: "1120",
      price: "1499",
    },
    {
      img: "/",
      name: "Филадельфия и лосось сет",
      pieces: "36",
      weight: "1260",
      price: "1499",
    },
    {
      img: "/",
      name: `Сет "6 Филадельфий"`,
      pieces: "46",
      weight: "1320",
      price: "1559",
    },
    {
      img: "/",
      name: "Топовый сет",
      pieces: "40",
      weight: "1020",
      price: "1519",
    },
    {
      img: "/",
      name: "Камикадзе сет",
      pieces: "52",
      weight: "1200",
      price: "1469",
    },
  ]);
  const [defaultList, setDefault] = useState(cards);
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

  return (
    <div>
      <Selected title='Сеты' value={value} handleChange={handleChange} />
      <Grid container spacing={2}>
        {cards.map((item) => (
          <Grid item xs={4}>
            <CardItem
              name={item.name}
              pieces={item.pieces}
              weight={item.weight}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Set;
