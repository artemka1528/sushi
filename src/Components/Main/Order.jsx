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
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: 300 }}>
      
      <Box
        sx={{
          "& > :not(style)": {
            display: "flex",
            justifyContent: "space-around",
          },
        }}
      >
        <div>
          <Collapse in={checked} collapsedSize={220}>
          <Typography color="grayColor.main" variant="h5">Заказать суши в Бишкеке</Typography>
          
            <Typography color='grayColor.main' sx={{bgcolor: 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, #F2F2F2 100%)'}} variant="body2">
              Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные
              суши с доставкой на дом, приготовленные по классическим и
              адаптированным к европейской аудитории рецептам, а также
              собственным наработкам наших поваров. Мы ценим время наших
              клиентов, поэтому вы можете заказать суши в Харькове с доставкой
              на дом или в офис. 
              В нашем меню более 20 видов суши:
              <ul>
                <li>Классические с сырым лососем, тунцом, окунем.</li>
                <li>Экзотические с тигровой креветкой, морским гребешком.</li>
                <li>Пикантные с копченым лососем, угрем.</li>
              </ul>
                
              В меню также представлены гунканы: с начинкой из красной икры и
              тобико, а также феликсы, где японский майонез сочетается с рыбой,
              морепродуктами, угрем. Любители острых блюд могут купить суши с
              соусом спайси. Популярные начинки — копченая курица, снежный краб,
              креветки, гребешки, тунец, лосось и окунь.
              Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные
              суши с доставкой на дом, приготовленные по классическим и
              адаптированным к европейской аудитории рецептам, а также
              собственным наработкам наших поваров. Мы ценим время наших
              клиентов, поэтому вы можете заказать суши в Харькове с доставкой
              на дом или в офис. 
              В нашем меню более 20 видов суши:
              <ul>
                <li>Классические с сырым лососем, тунцом, окунем.</li>
                <li>Экзотические с тигровой креветкой, морским гребешком.</li>
                <li>Пикантные с копченым лососем, угрем.</li>
              </ul>
                
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
        sx={{color: 'primary.main'}}
        control={<Switch sx={{opacity: '0'}} checked={checked} onChange={handleChange} />}
        label="Подробнее"
      />
    </Box>
  );
}
