/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

export default function RangeSlider({ rangeValues, setRangeValues }) {
  const [defaultMinMax, setDefaultMinMax] = useState({ min: 0, max: 10000 });

  useEffect(() => {
    setDefaultMinMax({
      min: rangeValues[0],
      max: rangeValues[1],
    });
  }, []);

  const handleChange = (event, newValue) => {
    setRangeValues(newValue);
  };

  return (
    <Box sx={{ width: '90%', marginTop: '10px' }}>
      <Slider
        getAriaLabel={() => 'Cost range'}
        value={rangeValues}
        min={defaultMinMax.min}
        max={defaultMinMax.max}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setRangeValues(prev => [defaultMinMax.min, prev[1]])}
          sx={{ cursor: 'pointer' }}
        >
          {defaultMinMax.min} Min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setRangeValues(prev => [prev[0], defaultMinMax.max])}
          sx={{ cursor: 'pointer' }}
        >
          {defaultMinMax.max} Max
        </Typography>
      </Box>
    </Box>
  );
}
