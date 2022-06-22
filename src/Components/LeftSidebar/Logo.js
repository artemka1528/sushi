import './LeftSidebar.css';

import Typography from '@mui/material/Typography';
import LogoImg from './img/logo.svg';

import { Link } from 'react-router-dom';


function Logo(props) {
  
  return (
    <Link to="/" style={{display: 'flex',flexDirection: "column", alignItems: 'center', cursor: 'pointer'}} className="Logo">
        <Typography variant="body2" color="text.secondary">
            <img src={LogoImg} alt="logo" />
        </Typography>
        <Typography variant='h5' sx={{fontWeight: 300,
                          fontSize: 30,
                          lineHeight: "30px",
                          textTransform: "uppercase",
                          color: "#000000",
                          marginTop:'10px'
                          }}>
                            {props.title}
          </Typography>
    </Link>
  );
}

export default Logo;
