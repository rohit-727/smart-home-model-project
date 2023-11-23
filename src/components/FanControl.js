import React from 'react';

function FanControl({ fanSpeed, onSpeedChange }) {
  const handleSliderChange = (event) => {
    const newSpeed = parseInt(event.target.value, 10);
    onSpeedChange(newSpeed);
  };
  
  return (
    <div className={`fan-control`}>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={fanSpeed}
        onChange={handleSliderChange}
        className='slider'
      />
      <p className='fanText'>Current Fan Speed: {fanSpeed}</p>
    </div>
  );
}

export default FanControl;
