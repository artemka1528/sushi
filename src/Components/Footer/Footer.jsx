import React from "react";
import { Stack, Typography,Link, Divider  } from "@mui/material";

function Footer(props) {
  return (
    <div  style={{marginTop: '60px'}}>
      <Divider />
    <Stack
    divider={<Divider orientation="vertical" flexItem />}
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
      spacing={5}
      sx={{padding: '22px 110px 0 110px', height: '269px'}}
    >
      <Stack spacing={2.5} direction="column" alignItems="flex-start" sx={{marginLeft: '0 !important'}}>
        <Typography>О компании</Typography>
        <Typography>Доставка и оплата</Typography>
        <Typography>Лента материалов</Typography>
        <Typography>Политика возврата</Typography>
      </Stack>
      <Stack spacing={1} direction="column" alignItems="flex-start" sx={{marginLeft: '0 !important'}}>
        <Typography>Введите номер</Typography>
        <Typography color="grayColor.main">+996 (__) ___ __ __</Typography>
        <Typography sx={{maxWidth: '212px'}} color="grayColor.main" variant="body2">Выберите удобный 
                    мессенджер для общения</Typography>
      </Stack>
      <Stack direction="column"
            justifyContent="center"
            alignItems="flex-start"
            pacing={0.5}
            sx={{marginLeft: '0 !important'}}>
              
        <Link sx={{textDecoration: 'none'}} color="grayColor.main" href="tel:+996 705 188 955">Тел:+996 705 188 955 </Link>
        <Link sx={{textDecoration: 'none'}} color="grayColor.main" href="tel:+996 555 188 955">Тел:+996 555 188 955 </Link>
        <Typography color="grayColor.main">Адрес:Бакаева 126 </Typography>
      </Stack>
    </Stack>
    </div>

  );
}

export default Footer;
