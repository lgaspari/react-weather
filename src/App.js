import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';
import Weather from './pages/Weather';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );
};

export default App;
