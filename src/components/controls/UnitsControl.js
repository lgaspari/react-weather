import { Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useMemo } from 'react';
import UNITS from '../../config/units';

const UnitsControl = ({ units, onChange }) => {
  const options = useMemo(
    () => [
      {
        label: 'ºC',
        value: UNITS.metric,
      },
      {
        label: 'ºF',
        value: UNITS.imperial,
      },
    ],
    [],
  );

  return (
    <div style={styles.container}>
      <Typography align="right" variant="caption">Units</Typography>
      <ToggleButtonGroup
        aria-label="Select units"
        exclusive
        onChange={(_, unit) => {
          if (unit !== null) onChange(unit);
        }}
        value={units}
      >
        {options.map(({ label, value }) => (
          <ToggleButton
            aria-label={value}
            key={value}
            style={styles.toggleButton}
            value={value}
          >
            {label}
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
  toggleButton: {
    padding: '0px 11px',
  },
};

export default UnitsControl;
