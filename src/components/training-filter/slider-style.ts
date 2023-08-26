export const sliderStyle = {
  height: '1px',
  color: '#333333',
  marginTop: '-22px',
  '& .MuiSlider-thumb': {
    width: '16px',
    height: '16px',
    backgroundColor: '#333333',
    borderRadius: '50%',
    WebkitTransition: '0.3s ease',
    Otransition: '0.3s ease',
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
