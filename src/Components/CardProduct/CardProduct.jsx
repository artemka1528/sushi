import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Box, Grid, CardMedia, Typography, Stack, Button } from "@mui/material";
import { CardContext } from "../../App";

function CardProduct({ name }) {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const { cardContext, setCardContext } = useContext(CardContext);
  useEffect(() => {
    async function getSet() {
      let response = await fetch(`http://localhost:3001/set/${id}`);
      let set = await response.json();
      setCards(set);
    }
    getSet();
  }, [id]);
  console.log(cards);
  return (
    <Box sx={{bgcolor: '#ffffff', borderRadius: '5px'}}>
      <Grid alignItems="center" spacing={4} container columns={2}>
        <Grid xs={1} item>
          <CardMedia height="435" component="img" image={cards.img} />
        </Grid>
        <Grid xs={1} item>
          <Stack spacing={2.5} alignItems="flex-start">
            <Typography variant="h2">{cards.name}</Typography>
            <Typography color="primary.main" variant="body2">{cards.weight} грамм</Typography>
            <Typography color="darkColor.main" variant="h6">Состав</Typography>
            <Typography variant="body2">Лосось, сыр "Филадельфия", огурец, авокадо</Typography>
            <Button onClick={() => {
                setCardContext([...cardContext, {...cards} ]);
          }} variant="contained">Хочу!</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardProduct;
