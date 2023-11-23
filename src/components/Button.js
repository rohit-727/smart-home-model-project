import React, { useState } from 'react';
import FanControl from './FanControl';

function Button({ label, icon, iconToggled, status, onToggle, fanButton }) {
  const [fanControlsVisible, setFanControlsVisible] = useState(false);

  const toggleFanControls = () => {
    setFanControlsVisible(!fanControlsVisible);
  };

  return (
    <div className={`button ${fanControlsVisible && fanButton ? 'expanded' : ''}`} onClick={() => { onToggle(); toggleFanControls(); }}>
      <div className="button-content">
        <div className="button-icon">{status ? icon : iconToggled}</div>
        <div className="button-text">{label}</div>
        
      </div>
      {fanControlsVisible && fanButton && <FanControl />}
    </div>
  );
}

export default Button;
