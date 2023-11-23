import React, { useState } from 'react';
import './App.css';
import TitleBar from './components/TitleBar';
import Button from './components/Button';
import FanButton from './components/FanButton'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { PiFanFill } from 'react-icons/pi';
import { postData } from './API';

function App() {
  const [GFLStatus, setGFL] = useState(false);
  const [FFLStatus, setFFL] = useState(false);
  const toggleGFL = async () => {
    try {
      setGFL(!GFLStatus)
      await postData({ 'GFL': !GFLStatus}); 
    } catch (error) {
      alert('Error: '+error);
    }
  };
  const toggleFFL = async () => {
      try {
        setFFL(!FFLStatus)
        await postData({ 'FFL': !FFLStatus}); 
      } catch (error) {
        alert('Error: '+error);
      }
  };
  async function speedChange(newSpeed) {
    try { 
      await postData({newSpeed})
    }
    catch(error){
      alert('Error: '+error)
    }
  };

  return (
    <div className="App">
      <TitleBar />
      <div className='buttonContainer'>
        <Button label="Ground Floor Light" icon={<FaLightbulb />} iconToggled={<FaRegLightbulb />} status={GFLStatus} onToggle={toggleGFL} />
        <Button label="First Floor Light" icon={<FaLightbulb />} iconToggled={<FaRegLightbulb />} status={FFLStatus} onToggle={toggleFFL}/>
        <FanButton label="First Floor Fan" icon={<span><PiFanFill /></span>} iconToggled={<PiFanFill />} status='' speedChange={speedChange}/> 
      </div>
    </div>
  );
}

export default App;