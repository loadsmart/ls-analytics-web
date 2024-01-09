import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('ls_managed_analytics_token');

  const handleSignOut = () => {
    localStorage.removeItem('ls_managed_analytics_token');
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div>
      {token ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default Header;
