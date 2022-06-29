import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#F46D40',
    },
    secondary: {
      main: '#FF9846',
    },
    darkColor: {
      main: "#111111",
    },
    grayColor: {
      main: "#A4ACAD",
      secondary: '#F2F2F2'
    },
    warning: {
      main: '#EB5757',
    },
    
  },
  colorNone: {
    main:'rgba(0, 0, 0, 0)',
  },
  border: {
    main: 5,
  },
  link: {
    main: "none",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
      xxl: 1770,
    },
  },
});

