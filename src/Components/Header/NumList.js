
import React from "react";
import { Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from '../../Theme';

function NumList({num, ...props}) {
    const TitleNum = styled(Typography)(({theme}) => ({
      color: theme.palette.darkColor.main,
    }))

    const NumLink = styled(Link)(({theme}) => ({
        textDecoration: "none",
    }))
    const ListNum = num.map((item, index) => (
      <NumLink key={index} href={'tel:' + item.href}>{item.title}</NumLink>
    ))
  return (
    <>
      <TitleNum variant="h6">
        Наш телефон
      </TitleNum>
      {ListNum}
      <Typography sx={{color: Theme.palette.grayColor.main}} variant="body2">работаем с {props.timeStart} до {props.timeEnd}</Typography>
    </>
  );
}

export default NumList;
