import React from 'react';
import {} from 'react-icons'
import { BsFillHouseDoorFill } from 'react-icons/bs';

function TitleBar() {
  return (
    <div className="title-bar">
      <h1 className='title-bar-text'><BsFillHouseDoorFill className='homeIcon'/>  Smart Home Controller</h1>
    </div>
  );
}

export default TitleBar;
