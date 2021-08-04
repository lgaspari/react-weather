import { Box, Chip, Paper, Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { capitalizeWords } from '../../utils/strings';

const WeatherCard = ({ weather }) => {
  const {
    country,
    icon,
    main: {
      feels_like,
      temp,
    },
    name
  } = weather;
  const description = capitalizeWords(weather.description);

  return (
    <Paper
      elevation={16}
      style={{
        borderRadius: '16px',
        minWidth: '300px',
        overflow: 'hidden',
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding={2}
        paddingBottom={6}
      >
        <Box paddingBottom={4}>
          <Chip
            color="primary"
            icon={<LocationOn />}
            label={`${name}, ${country}`}
            size="small"
          />
          </Box>

        <Typography variant="h6">{description}</Typography>
        {/* <Typography variant="caption">{name}, {country}</Typography> */}
        <img
          alt={description}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          title={description}
        />
        <Typography variant="h2">{Math.round(temp)}º</Typography>
        <Typography variant="caption">Feels like: {Math.round(feels_like)}º</Typography>
      </Box>
    </Paper>
  );
};

export default WeatherCard;
