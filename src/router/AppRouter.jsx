import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import FlightsPage from '../pages/FlightsPage.jsx';
import HelpPage from '../pages/Navbar-Footer/HelpPage.jsx';
import AboutPage from '../pages/Navbar-Footer/AboutPage.jsx';
import PrivacyPage from '../pages/Navbar-Footer/PrivacyPage.jsx';
import LoginPage from '../pages/Auth/LoginPage.jsx';
import RegisterPage from '../pages/Auth/RegisterPage.jsx';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage.jsx';

// Eğer PlaneStatusPage'i oluşturduysan/taşıdıysan onun yolunu da düzeltmelisin
// import PlaneStatusPage from '../pages/Status/PlaneStatusPage.jsx';

//========================================================

const AppRouter = () => {
  return (
    <Routes>
      {}
      <Route path="/" element={<HomePage />} />
      <Route path="/flights" element={<FlightsPage />} />

      {/* Navbar/Footer Rotaları */}
      <Route path="/support" element={<HelpPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} /> {/* Eğer PrivacyPage.jsx varsa */}
      
      {/* Auth Rotaları */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} /> 
      <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 

      {/* Eğer PlaneStatusPage rotası eklenecekse buraya:
      <Route path="/status" element={<PlaneStatusPage />} />
      */}
      
      {/* Örnek korumalı rota---> AUTH PAKETİ BİTİNCE:
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } /> 
      */}
    </Routes>
  );
};

export default AppRouter;

// Not: Auth Projesinin ProtectedRoute'u daha sonra eklenecek.
