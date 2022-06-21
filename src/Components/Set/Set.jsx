import React, { useState } from "react";

import CardItem from "../Card/CardItem";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

function Set(props) {
  const [cards, setCards] = useState([
    {
      img: "/",
      name: "Саломон сет",
      pieces: "30",
      weight: "40",
      price: "1500",
    },
    {
      img: "/",
      name: "Саломон сет",
      pieces: "40",
      weight: "40",
      price: "1499",
    },
    {
      img: "/",
      name: "Саломон сет",
      pieces: "36",
      weight: "40",
      price: "1499",
    },
    {
      img: "/",
      name: "Саломон сет",
      pieces: "46",
      weight: "40",
      price: "1559",
    },
    {
      img: "/",
      name: "Саломон сет",
      pieces: "40",
      weight: "40",
      price: "1519",
    },
    {
      img: "/",
      name: "Саломон сет",
      pieces: "52",
      weight: "40",
      price: "1469",
    },
  ]);
  const sortPriceLow = () => {
    setCards([...cards].sort((a, b) => (a.price > b.price ? 1 : -1)));
  };
  const sortPriceHeight = () => {
    setCards([...cards].sort((a, b) => (a.price < b.price ? 1 : -1)));
  };
  const sortPieces = () => {
    setCards([...cards].sort((a, b) => (a.pieces > b.pieces ? 1 : -1)));
  };
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    if (event.target.value == "cheaper") {
      sortPriceLow();
    } else if(event.target.value == "expensive") {
        sortPriceHeight();
    } else if(event.target.value == "pieces") {
        sortPieces();
    }
  };

  const cardsList = cards.map((item) => (
    <CardItem
      name={item.name}
      pieces={item.pieces}
      weight={item.weight}
      price={item.price}
    />
  ));
  return (
    <div>
      <div className="SetHeader">
        <Box sx={{ maxWidth: 198 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Сортировка"
              onChange={handleChange}
            >
              <MenuItem value={"default"}>По умолчанию</MenuItem>
              <MenuItem value={"name"}>Название</MenuItem>
              <MenuItem value={"cheaper"}>Сначала дешевле</MenuItem>
              <MenuItem value={"expensive"}>Сначала дороже</MenuItem>
              <MenuItem value={"pieces"}>Количество кусочков</MenuItem>
              <MenuItem value={"weight"}>Вес</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {/* <CardItem name={name} cheaper={cheaper} expensive={expensive} pieces={pieces} weight={weight} /> */}
      <Grid>{cardsList}</Grid>
    </div>
  );
}

export default Set;
