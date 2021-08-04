import { Box, Divider, Paper, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { format } from 'date-fns';
import { capitalizeWords } from '../../utils/strings';

const WeatherCard = ({ weather }) => {
  const { country, icon, main, name, sys, wind } = weather;
  const description = capitalizeWords(weather.description);

  return (
    <Paper
      elevation={16}
      style={{
        borderRadius: '16px',
        minWidth: '350px',
        overflow: 'hidden',
      }}
    >
      <Box display="flex" padding={4} style={{ gap: 32 }}>
        {/* Summary */}
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding={4}
        >
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle2">{name}, {country}</Typography>
          <img
            alt={description}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            title={description}
          />
          <Typography variant="h2">{Math.round(main.temp)}º</Typography>
          <Typography variant="caption">Feels like: {Math.round(main.feels_like)}º</Typography>
        </Box>

        <Divider flexItem orientation="vertical" />

        {/* Details */}
        <Box
          display="flex"
          flexDirection="column"
          padding={4}
        >
          <Paper variant="outlined">
            <Box display="flex" justifyContent="space-between" padding={2}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">Min: {Math.round(main.temp_min)}º</Typography>
                <Typography variant="body2">Max: {Math.round(main.temp_max)}º</Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">Humidity: {main.humidity}%</Typography>
                <Typography variant="body2">Pressure: {main.pressure} hPa</Typography>
              </Box>
            </Box>
          </Paper>

          <Box display="flex" justifyContent="space-between" paddingTop={4}>
            <Typography variant="body2">Wind Speed: {wind.speed} m/s or m/h</Typography>
            <Typography variant="body2">Wind Degree: {wind.deg}º</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">Sunrise: {format(new Date(sys.sunrise), 'HH:mm')} hs</Typography>
            <Typography variant="body2">Sunset: {format(new Date(sys.sunset), 'HH:mm')} hs</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default WeatherCard;
