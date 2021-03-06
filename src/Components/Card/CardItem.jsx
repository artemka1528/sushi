import React, { useContext, useState, useEffect } from "react";


import { CardContext, DisContext } from '../../App';

import { Divider, Typography, Button, CardMedia, CardContent, CardActions, Card } from "@mui/material";

import imge from '../../img/product/1.png';

function CardItem({name, pieces, weight, price, want}) {
  const {cardContext, setCardContext} = useContext(CardContext);
  const [ disBtnContext, setBtnContext ] = useContext(DisContext);
  const [valueWant, setWant] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 288, height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <CardMedia
          component="img"
          height="210"
          image={imge}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {weight} грамм, {pieces} кусочков
          </Typography>
        </CardContent>
        <Divider />
        <CardActions sx={{justifyContent: 'space-between'}}>
          <Typography variant="h6" component="div">
            {price} СОМ
          </Typography>
          <Button onClick={() => {
            want = true;
            setWant(want);
            setCardContext([...cardContext, {name, pieces, weight, price, want} ]);
          }} variant="contained" size="small" disabled={valueWant} >Хочу!</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardItem;
