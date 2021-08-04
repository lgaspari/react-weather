import { Typography, useTheme } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PALETTE from '../../config/palette';

const ThemeControl = ({ backgroundColor, onChange }) => {
  const theme = useTheme();
  const options = [
    {
      label: 'Cyan',
      value: PALETTE.primary,
    },
    {
      label: 'Pink',
      value: PALETTE.secondary,
    },
  ];

  return (
    <div style={styles.container}>
      <Typography variant="caption">Theme</Typography>
      <ToggleButtonGroup
        aria-label="Select theme"
        exclusive
        onChange={(_, color) => {
          if (color !== null) onChange(color);
        }}
        style={styles.toggle}
        value={backgroundColor}
      >
        {options.map(({ label, value }) => {
          return (
            <ToggleButton
              aria-label={label}
              key={value}
              style={{
                ...styles.toggleButton,
                backgroundColor: theme.palette[value].main,
                borderColor: value === backgroundColor ? '#000' : styles.toggleButton.borderColor,
              }}
              value={value}
            >
              {' '}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  toggle: {
    gap: '8px',
  },
  toggleButton: {
    borderRadius: '50%',
    borderColor: '#E9E9E9',
  },
};

export default ThemeControl;
