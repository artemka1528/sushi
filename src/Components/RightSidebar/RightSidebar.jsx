import React, { useState, useContext } from "react";

import { CardContext } from "../../App";

import CardBasket from "./CardBasket";

import { Box, Typography, Button, Stack, Link, Paper } from "@mui/material";

function RightSidebar(props) {
  const { cardContext, setCardContext } = useContext(CardContext);
  const [ valueBasket, setValueBacket] = useState(0);
  
  const listCardBasket = cardContext.map((item, index) => (
    <CardBasket key={index} title={item.name} price={item.price} want={item.want}/>
  ));


  if (cardContext.length == 0) {
    return (
      <Stack
        sx={{
          width: "290px",
          height: "140px",
          backgroundColor: "grayColor.secondary",
          borderRadius: "5px",
        }}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Typography sx={{ marginTop: "10px" }} variant="h5">
          Ваша корзина пуста.
        </Typography>
        <Typography
          sx={{ marginTop: "12px", marginBottom: "26px" }}
          variant="body2"
        >
          Добавьте же скорее что-нибудь!
        </Typography>
        <Typography
          sx={{
            borderRadius: "0 0 5px 5px",
            padding: "12px 0",
            backgroundColor: "secondary.main",
            textAlign: "center",
            width: "100%",
            color: "white",
            fontSize: "14px",
          }}
          variant="body2"
        >
          Бесплатная доставка от 800 СОМ
        </Typography>
      </Stack>
    );
  } else {
    return (
      <Stack sx={{maxWidth: '290px'}}>
        <Typography>Корзина</Typography>
        {listCardBasket}

        <Paper sx={{display: 'flex', alignItems: 'center', gap: '20px', boxShadow: 'none'}}>
            <Typography> СОМ</Typography>
            <Button variant="contained">Оформить заказ</Button>
        </Paper>
      </Stack>
    );
  }
}

export default RightSidebar;
