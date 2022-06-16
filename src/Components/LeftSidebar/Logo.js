
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LogoImg from './img/logo.svg';


const styleLogo = {
  fontWeight: 300,
  fontSize: 30,
  lineHeight: "30px",
  textTransform: "uppercase",
  color: "#000000",
}
function Logo(props) {
  
  return (
    <div style={{display: 'flex',flexDirection: "column", alignItems: 'center', cursor: 'pointer'}} className="Logo">
        <Typography variant="body2" color="text.secondary">
            <img src={LogoImg} alt="logo" />
        </Typography>
        <ListItemText style={styleLogo}>{props.title}</ListItemText>
    </div>
  );
}

export default Logo;
