import { Box, Paper, Typography } from '@material-ui/core';
import { capitalizeWords } from '../utils/strings';

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
      <Box
        display="flex"
        flexDirection="column"
        padding={4}
        style={{ gap: 8 }}
      >
        {/* Summary */}
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingY={2}
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

        {/* Details */}
        <Typography variant="body2">Min: {main.temp_min} º</Typography>
        <Typography variant="body2">Max: {main.temp_max} º</Typography>
        <Typography variant="body2">Humidity: {main.humidity} %</Typography>
        <Typography variant="body2">Wind Speed: {wind.speed}</Typography>
        <Typography variant="body2">Wind Degree: {wind.deg} º</Typography>
        <Typography variant="body2">Sunrise: {sys.sunrise} hs</Typography>
        <Typography variant="body2">Sunset: {sys.sunset} hs</Typography>
      </Box>
    </Paper>
  );
};

export default WeatherCard;
