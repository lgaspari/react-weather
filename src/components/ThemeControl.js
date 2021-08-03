import { Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useEffect, useState } from 'react';

const options = {
  Cyan: '#86d8f7',
  Pink: '#f9b8d2',
  Yellow: '#fefbb1',
};

const ThemeControl = () => {
  const [color, setColor] = useState(options.Cyan);

  useEffect(() => {
    if (color)
      document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={styles.container}>
      <Typography variant="caption">Theme</Typography>
      <ToggleButtonGroup
        aria-label="Select theme"
        exclusive
        onChange={(_, color) => {
          if (color !== null) setColor(color);
        }}
        style={styles.toggle}
        value={color}
      >
        {Object.keys(options).map((key) => (
          <ToggleButton
            aria-label={key}
            key={key}
            style={{
              ...styles.toggleButton,
              backgroundColor: options[key],
              borderColor: options[key] === color ? '#000' : styles.toggleButton.borderColor,
            }}
            value={options[key]}
          >
            {' '}
          </ToggleButton>
        ))}
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
