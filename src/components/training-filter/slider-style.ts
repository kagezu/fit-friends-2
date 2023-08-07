export const sliderStyle = {
  height: '1px',
  'color': '#333333',
  'margin-top': '-22px',
  '& .MuiSlider-thumb': {
    width: '16px',
    height: '16px',
    'background-color': '#333333',
    'border-radius': '50%',
    '-webkit-transition': '0.3s ease',
    '-o-transition': '0.3s ease',
    transition: '0.3s ease',
    border: 'none',
    cursor: 'pointer',
  }
};

export const sliderSlotProps = {
  thumb: {
    className: 'filter-range__min-toggle'
  }
};
