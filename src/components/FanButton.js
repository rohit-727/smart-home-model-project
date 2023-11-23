import React, { useState, useEffect } from 'react';
import FanControl from './FanControl';

function FanButton({ label, icon, iconToggled, status, speedChange}) {
  const [fanControlsVisible, setFanControlsVisible] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(3);

  useEffect(() => {
    const storedFanSpeed = localStorage.getItem('fanSpeed');
    if (storedFanSpeed) {
      setFanSpeed(parseInt(storedFanSpeed, 10));
    }
  }, []);

  const toggleFanControls = () => {
    setFanControlsVisible(!fanControlsVisible);
  };

  const handleFanSpeedChange = (newSpeed) => {
    setFanSpeed(newSpeed);
    // Save fan speed to local storage
    localStorage.setItem('fanSpeed', newSpeed);
    speedChange(newSpeed)
  };
  
  return (
    <div className={`button fan ${fanControlsVisible ? 'expanded' : ''}`} 
    onClick={ () => {toggleFanControls();}} 
    onMouseEnter={() => setFanControlsVisible(true)}
    onMouseLeave={() => setFanControlsVisible(false)}>
      <div className="button-content">
        <div className="button-icon">{status ? icon : iconToggled}</div>
        <div className="button-text">{label}</div>  
      </div>
      <FanControl fanSpeed={fanSpeed} onSpeedChange={handleFanSpeedChange}/>
    </div>
  );
}

export default FanButton;
