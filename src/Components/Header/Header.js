import { Divider, Typography, Stack } from "@mui/material";
import {Link} from 'react-router-dom';
import React from "react";


function Header(props) {
  
  return (
    <>
    <Stack  spacing={2} direction="row" className="Header">
        <Stack sx={{alignItems:'center'}}>
            <Typography variant="h6">
                Наш телефон
            </Typography>
            <a href={'tel:' + props.tel1}>{props.tel1}</a>
            <a href={'tel:' + props.tel2}>{props.tel2}</a>
            <Typography variant="body2">работаем с {props.timeStart} до {props.timeEnd}</Typography>
        </Stack>
        <Divider orientation="vertical" sx={{height: "auto"}}/>
        <Stack sx={{justifyContent: 'center'}}>
        <Typography variant="body2">
            Город:
        </Typography>
        <Typography variant="body1">
            {props.city}
        </Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ flex: "1 1 auto", justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link to="/Feedback">Отзывы</Link>
            <Link to="/ShippingAndPayment">Доставка и оплата</Link>
        </Stack>
    </Stack>
    <Divider />
    </>
  );
}

export default Header;
