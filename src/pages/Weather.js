import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Grid, Grow, useTheme } from '@material-ui/core';
import { WeatherCard } from '../components/cards';
import { ThemeControl, UnitsControl } from '../components/controls';
import Spinner from '../components/Spinner';
import PALETTE from '../config/palette';
import UNITS from '../config/units';

// TODO: Get current location
// TODO: Get unit based on location / default to some
const Landing = () => {
  const theme = useTheme();

  const [backgroundColor, setBackgroundColor] = useState(PALETTE.primary);
  const [data, setData] = useState(null);
  const [units, setUnits] = useState(UNITS.metric);
  const [weather, setWeather] = useState(null);

  // TODO: Improve error handling
  useEffect(() => {
    setTimeout(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=88422574a301865a944e9f57525ecfc4&units=${units}`;
      
      axios.get(apiUrl)
        .then((response) => setData(response.data))
        .catch(() => alert('something went wrong'));
    }, 1500);
  }, [units]);

  useEffect(() => {
    if (data) {
      const { main, name, wind } = data;
      const { description, icon } = data.weather[0];
      const { country, ...sys } = data.sys;

      setWeather({
        country,
        description,
        icon,
        main,
        name,
        sys,
        wind,
      });
    }
  }, [data]);

  return (
    <Grid
      container
      direction="column"
      style={{
        backgroundColor: theme.palette[backgroundColor].main,
        transition: 'ease-in-out 0.5s background',
      }}
    >
      {/* Header */}
      <Grid item>
        <Box display="flex" justifyContent="space-between" padding={2}>
          <ThemeControl backgroundColor={backgroundColor} onChange={setBackgroundColor} />
          <UnitsControl onChange={setUnits} units={units} />
        </Box>
      </Grid>

      {/* Weather */}
      <Grid item xs>
        <Box alignItems="center" display="flex" height="100%" justifyContent="center">
          {weather ? (
            <Grow in>
              <div>
                <WeatherCard weather={weather} />
              </div>
            </Grow>
          ) : (
            <Spinner />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Landing;
