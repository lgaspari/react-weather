import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#648dae',
      light: '#a6d4fa',
      main: '#90caf9',
    },
    secondary: {
      dark: '#aa647b',
      light: '#f6a5c0',
      main: '#f6a5c0',
    },
  },
  // overrides: {
  //   MuiTypography: {
  //     caption: {
  //       color: '#757575',
  //     },
  //   },
  // },
});

export default theme;
