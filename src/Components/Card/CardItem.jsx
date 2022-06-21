import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

function CardItem({name, pieces, weight, price}) {
  return (
    <>
      <Card sx={{ maxWidth: 288 }}>
        <CardMedia
          component="img"
          height="210"
          image="/static/images/cards/contemplative-reptile.jpg"
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
        <CardActions>
          <Typography variant="h6" component="div">
            {price} СОМ
          </Typography>
          <Button size="small">Хочу!</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardItem;
