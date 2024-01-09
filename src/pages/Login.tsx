import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const token = localStorage.getItem('ls_managed_analytics_token');

  useEffect(() => {
    if (token) {
      navigate('/analytics');
    }
  }, [navigate, token]);

  const handleLogin = async (username: string, password: string) => {
    try {
      const payload = {
        username: username,
        password: password,
      };

      const baseUrl: string = import.meta.env.VITE_BASE_API_URL
      const url = baseUrl + '/login'
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const jwtToken = response.data.jwt_token;
      localStorage.setItem('ls_managed_analytics_token', jwtToken);
      navigate('/analytics');
    } catch (error) {
      console.log(error)  
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
