import React from "react";
import { Stack, Typography,Link, Divider  } from "@mui/material";

function Footer(props) {
  return (
    <>
    <Stack
    divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      sx={{display: 'flex', alignContent: 'flex-end', justifyContent: 'center', alignItems: 'flex-start'}}
    >
      <Stack spacing={2.5} direction="column">
        <Typography>О компании</Typography>
        <Typography>Доставка и оплата</Typography>
        <Typography>Лента материалов</Typography>
        <Typography>Политика возврата</Typography>
      </Stack>
      <Stack direction="column">
        <Typography>Введите номер</Typography>
        <Typography variant="body2">Выберите удобный 
                    мессенджер для общения</Typography>
      </Stack>
      <Stack direction="column">
        <Link href="tel:+996 705 188 955">Тел:+996 705 188 955 </Link>
        <Link href="tel:+996 555 188 955">Тел:+996 555 188 955 </Link>
        <Typography>Адрес:Бакаева 126 </Typography>
      </Stack>
    </Stack>
    </>

  );
}

export default Footer;
