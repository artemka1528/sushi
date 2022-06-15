import React from "react";

import { Link } from "react-router-dom";

import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
const styleBtn = {
  '&:hover': {
    backgroundColor: "#333",
  },
}

function ListMenu({menu}) {
  console.log(menu)

  const x = menu.map((item) => 
    <Link color="secondary"  style={{
      display: 'flex', 
      alignItems: 'center', 
      gap: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "30px",
      color: "#000000",
      textDecoration: 'none'
      }} to={item.href} key={item.id}>
      <img src={item.img} alt="" />
      {item.title}
    </Link>

  );
  return (
    <div style={{width: "100%", maxWidth: "160px", display:"flex", gap: "30px", marginTop: 30, flexDirection: 'column', alignItems: 'flex-start', marginLeft: "29px"}} className="ListMenu">
        {x}
      <Button  color="secondary">dsadas</Button>
    </div>
  );
}

export default ListMenu;
