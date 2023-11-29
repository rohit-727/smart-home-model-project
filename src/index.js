import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(false);
    setTimeout(() => {
      setLoggedIn(true);
    }, 300);
  };

  useEffect(() => {
    const transitionEndHandler = () => {
      if (!showLogin) {
        setLoggedIn(true);
      }
    };

    document.addEventListener('transitionend', transitionEndHandler);

    return () => {
      document.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [isLoggedIn, showLogin]);

  return (
    <div>
      {!isLoggedIn && <Login onLogin={handleLogin} isVisible={showLogin} />}
      {isLoggedIn && <App />}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
