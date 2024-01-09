import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import Login from '../pages/Login';
import ManagedAnalytics from '../pages/ManagedAnalytics'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/analytics" element={<ManagedAnalytics />} />
    </Routes>
  );
};

export default Router;
