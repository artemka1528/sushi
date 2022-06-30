import React, { useContext, useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import { CardContext, DisContext } from '../../App';

import { Divider, Typography, Button, CardMedia, CardContent, CardActions, Card } from "@mui/material";

import imge from '../../img/product/1.png';

function CardItem({name, pieces, weight, price, want, img, id}) {
  const {cardContext, setCardContext} = useContext(CardContext);
  const [ disBtnContext, setBtnContext ] = useContext(DisContext);
  const [valueWant, setWant] = useState(false);

  return (
    
      <Card sx={{ maxWidth: 288, height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Link to={`/CardProduct/${id}`}>
        <CardMedia
          component="img"
          height="210"
          image={img}
          alt="green iguana"
          sx={{padding: '0 18px'}}
        />
        <CardContent>
          <Typography color="darkColor.main" gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {weight} грамм, {pieces} кусочков
          </Typography>
        </CardContent>
        <Divider />
        </Link>
        <CardActions sx={{justifyContent: 'space-between'}}>
          <Typography variant="h6" component="div">
            {price} СОМ
          </Typography>
          <Button onClick={() => {
            want = true;
            setWant(want);
            setCardContext([...cardContext, {name, pieces, weight, price, want, img} ]);
          }} variant="contained" size="small" disabled={valueWant} >Хочу!</Button>
        </CardActions>
      </Card>
    
  );
}

export default CardItem;
