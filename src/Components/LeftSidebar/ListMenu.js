import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import styles from './ListMenu';
import styled from "@emotion/styled";



function ListMenu({menu}) {
  const MyButton = styled(Button)(({theme}) =>({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    }
  }))

  const MenuLink = styled(Link)(({theme}) =>({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: '30px',
    color: '#000000',
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    }
  }))

  const x = menu.map((item) => 
    <MenuLink to={item.href} key={item.id}>
      <img src={item.img} alt="" />
      {item.title}
    </MenuLink>

  );
  return (
    <div className={styles.listMenu}>
        {x}
    </div>
  );
}

export default ListMenu;
