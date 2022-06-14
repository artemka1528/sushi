
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LogoImg from './img/logo.svg';


function Logo(props) {
  return (
    <div style={{display: 'flex',flexDirection: "column", alignItems: 'center'}} className="Logo">
        <Typography variant="body2" color="text.secondary">
            <img src={LogoImg} alt="logo" />
        </Typography>
        <ListItemText style={{fontWeight: 300,
                                fontSize: 30,
                                lineHeight: "30px",
                                textTransform: "uppercase",
                                color: "#000000"
                                }}>
                                    {props.title}</ListItemText>
    </div>
  );
}

export default Logo;
