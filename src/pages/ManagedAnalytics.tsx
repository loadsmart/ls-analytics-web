import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Reports: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ls_managed_analytics_token');
    if (!token) {
      navigate('/login');
    } else {
      const baseUrl: string = import.meta.env.VITE_BASE_API_URL
      const url = baseUrl + '/pbi_token'
      axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // Log the response to the console
          console.log('Response:', response);
          if (response.status !== 200) {
            navigate('/login');
          }
          return response.data;
        })
        .then((data) => {
          // Log the data to the console
          console.log('Data:', data);
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error:', error);
          localStorage.removeItem('ls_managed_analytics_token');
          navigate('/login');
        });
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <h1>Reports Page</h1>
      <p>User is logged in. Show the managed analytics content.</p>
    </div>
  );
};

export default Reports;
