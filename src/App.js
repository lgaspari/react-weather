import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';
import Landing from './pages/Landing';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
};

export default App;
