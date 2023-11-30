import React, { useState } from 'react';
import './Login.css';
import Error from './ErrorDiv';
const Login = ({ onLogin, isVisible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, errorState] = useState(false);
  const [errorVal, setErrVal] = useState('')

  const handleLogin = () => {
    if((username==="admin")&&(password==="admin")){
        onLogin();
    }
    else{
        errorState(true)
        setErrVal("Invalid credentials, please try again.")
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };


  return (
    <div className={`loginDiv ${isVisible ? 'visible' : ''}`}>
      <h2>Login</h2>
      <form>
        <label>
          Username
          <input type="text" className="inputLogin" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyPress} />
        </label>
        <br />
        <label>
          Password
          <input type="password" className="inputLogin password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
        </label>
        <br />
        <button type="button" className='loginButton' onClick={handleLogin}>
          Login
        </button>
        {error && <Error error={errorVal}/>}
      </form>
    </div>
  );
};

export default Login;
