import { Divider, Typography, Stack } from "@mui/material";
import {Link} from 'react-router-dom';
import React, { useState } from "react";

import NumList from './NumList';
import ListLink from './ListLink';

import { Theme } from '../../Theme';


function Header(props) {
    

    const [num, setNum] = useState([
        {title:'+996 705 188 955', href:'+996 705 188 955'},
        {title:'+996 555 188 955', href:'+996 555 188 955'},
    ]);
    const [link, setLink] = useState([
        {title:'Отзывы', href:'/Feedback'},
        {title:'Доставка и оплата', href:'/ShippingAndPayment'},
    ]);

  return (
    <>
    <Stack  spacing={2} direction="row" className="Header">
        <Stack sx={{alignItems:'center'}}>
            <NumList timeStart='10:00' timeEnd='00:00' num={num} />
        </Stack>

        <Divider orientation="vertical" sx={{height: "auto"}}/>

        <Stack sx={{justifyContent: 'center'}}>
            <Typography sx={{color: Theme.palette.grayColor.main}} variant="body2">
                Город:
            </Typography>
            <Typography variant="body1">
                {props.city}
            </Typography>
        </Stack>
        
        <Stack direction="row" spacing={2} sx={{ flex: "1 1 auto", justifyContent: 'flex-end', alignItems: 'center' }}>
            <ListLink link={link} />
        </Stack>
    </Stack>
    <Divider />
    </>
  );
}

export default Header;
