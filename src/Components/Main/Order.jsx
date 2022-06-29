import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function Order() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 300 }}>
      
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            justifyContent: "space-around",
          },
        }}
      >
        <div>
          <Collapse in={checked} collapsedSize={40}>
            <Typography variant="body2">
              Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные
              суши с доставкой на дом, приготовленные по классическим и
              адаптированным к европейской аудитории рецептам, а также
              собственным наработкам наших поваров. Мы ценим время наших
              клиентов, поэтому вы можете заказать суши в Харькове с доставкой
              на дом или в офис. В нашем меню более 20 видов суши: Классические
              с сырым лососем, тунцом, окунем. Экзотические с тигровой
              креветкой, морским гребешком. Пикантные с копченым лососем, угрем.
              В меню также представлены гунканы: с начинкой из красной икры и
              тобико, а также феликсы, где японский майонез сочетается с рыбой,
              морепродуктами, угрем. Любители острых блюд могут купить суши с
              соусом спайси. Популярные начинки — копченая курица, снежный краб,
              креветки, гребешки, тунец, лосось и окунь.
            </Typography>
          </Collapse>
        </div>
       
      </Box>
      <FormControlLabel
        control={<Switch sx={{opacity: '0'}} checked={checked} onChange={handleChange} />}
        label="Подробнее"
      />
    </Box>
  );
}
