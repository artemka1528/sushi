import React from "react";

import { Grid, Typography, Select, FormControl,TextField, MenuItem, InputLabel, Box, Divider } from "@mui/material";


import './StyleSelected.css';
import styled from "@emotion/styled";

function Selected({value, handleChange, title}) {
  const StyledMenuItem = styled(MenuItem)(({theme}) =>({
    backgroundColor: 'none',
    "&:hover": {
      backgroundColor: theme.colorNone.main,
      color: theme.palette.secondary.main,
    },
    '.css-3ksqip-MuiButtonBase-root-MuiMenuItem-root.Mui-selected': {
      backgroundColor: theme.colorNone.main,
    }
  }))
  return (
    <Grid container sx={{justifyContent: 'space-between'}}>
        <Grid item xs={9}>
            <Typography variant='h5'>{title}</Typography>
        </Grid>
      <Box  className='qqq' sx={{ minWidth: 198 }}>
        <FormControl fullWidth>
          
          <InputLabel >Сортировка</InputLabel>
          <Select
            value={value}
            label="Сортировка"
            onChange={handleChange}
            variant="outlined"
          >
            <Divider />
            <StyledMenuItem value={"default"}>По умолчанию</StyledMenuItem>
            <StyledMenuItem value={"name"}>Название</StyledMenuItem>
            <StyledMenuItem value={"cheaper"}>Сначала дешевле</StyledMenuItem>
            <StyledMenuItem value={"expensive"}>Сначала дороже</StyledMenuItem>
            <StyledMenuItem value={"pieces"}>Количество кусочков</StyledMenuItem>
            <StyledMenuItem value={"weight"}>Вес</StyledMenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Selected;
