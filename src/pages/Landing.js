import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Grid, Grow } from '@material-ui/core';
import Spinner from '../components/Spinner';
import ThemeControl from '../components/ThemeControl';
import UnitsControl from '../components/UnitsControl';
import WeatherCard from '../components/WeatherCard';
import UNITS from '../config/units';

// TODO: Get current location
// TODO: Get unit based on location / default to some
const Landing = () => {
  const [data, setData] = useState(null);
  const [units, setUnits] = useState(UNITS.metric);
  const [weather, setWeather] = useState(null);

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

  // TODO: Improve error handling
  useEffect(() => {
    setTimeout(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=88422574a301865a944e9f57525ecfc4&units=${units}`;
      
      axios.get(apiUrl)
        .then((response) => setData(response.data))
        .catch(() => alert('something went wrong'));
    }, 1500);
  }, [units]);

  return (
    <Grid container direction="column">

      {/* Header */}
      <Grid item>
        <Box display="flex" justifyContent="space-between" padding={2}>
          <ThemeControl />
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
