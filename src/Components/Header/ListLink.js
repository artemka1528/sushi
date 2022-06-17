import React from "react";
import { Link } from 'react-router-dom';

import styled from "@emotion/styled";

function ListLink({link}) {
    
    const StyledLink = styled(Link)(({theme})=> ({
        color: theme.palette.darkColor.main,
        textDecoration: theme.link.main,
        "&:hover": {
            color: theme.palette.primary.main,
        }
    }))
    const listLink = link.map((item, index) => (<StyledLink key={index}  to={item.href}>{item.title}</StyledLink>))

  return (
    <>
        {listLink}
    </>
  );
}

export default ListLink;
