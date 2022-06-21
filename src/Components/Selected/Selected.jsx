import React from "react";

import { Grid, Typography, Select, FormControl,TextField, MenuItem, InputLabel, Box, Divider } from "@mui/material";





function Selected({value, handleChange, title}) {

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
            <MenuItem  value={"default"}>По умолчанию</MenuItem>
            <MenuItem value={"name"}>Название</MenuItem>
            <MenuItem value={"cheaper"}>Сначала дешевле</MenuItem>
            <MenuItem value={"expensive"}>Сначала дороже</MenuItem>
            <MenuItem value={"pieces"}>Количество кусочков</MenuItem>
            <MenuItem value={"weight"}>Вес</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Selected;
