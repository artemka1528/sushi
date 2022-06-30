import React, { useState, useContext } from "react";

import { CardContext, DisContext } from "../../App";
import "./StyleRightSidebar.css";

import { Grid, Typography, Button, Paper, CardMedia } from "@mui/material";

function CardBasket({ title, price, img }) {
  const [valuePrise, setValuePrice] = useState(price);

  const { cardContext, setCardContext } = useContext(CardContext);
  const { disBtnContext, setBtnContext } = useContext(DisContext);
  return (
    <>
      <Grid container columns={4}>
        <Grid xs={1} item>
        <CardMedia
          component="img"
          height="47"
          width="70"
          image={img}
          alt="green iguana"
        />
        </Grid>
        <Grid item xs={3}>
          <Grid sx={{ maxWidth: "171px" }} container columns={3}>
            <Grid
              sx={{
                maxWidth: "171px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              xs={3}
              item
            >
              {title}
            </Grid>
            <Grid
              sx={{ display: "flex", gap: "9px", alignItems: "center" }}
              xs={1}
              item
            >
              <Button 
                onClick={() => {
                  if (valuePrise == price) {
                    setCardContext(
                      cardContext.filter((item) => {
                        if(item.name !== title) {
                            return true
                        } else if(item.name == title) {
                            item.want = false;
                        }
                    })
                    );
                  } else {
                  }
                  setValuePrice(Number(valuePrise) - Number(price));
                }}
                sx={{
                  lineHeight: "23px",
                  fontSize: "18px",
                  minWidth: "19px",
                  color: "darkColor.main",
                  maxWidth: "19px",
                  height: "19px",
                  borderRadius: "100%",
                }}
              >
                -
              </Button>
              <Typography variant="div">1</Typography>
              <Button
                onClick={() => {
                  setValuePrice(Number(valuePrise) + Number(price));
                }}
                sx={{
                  lineHeight: "23px",
                  fontSize: "18px",
                  minWidth: "19px",
                  color: "#fff",
                  maxWidth: "19px",
                  height: "19px",
                  borderRadius: "100%",
                  backgroundColor: "primary.main",
                }}
              >
                +
              </Button>
            </Grid>
            <Grid sx={{ textAlign: "end" }} xs={2} item>
              {valuePrise} COM
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CardBasket;
