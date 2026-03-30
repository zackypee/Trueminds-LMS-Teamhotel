import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import { ResetPasswordPage } from './features/auth/pages/ResetPasswordPage';

function App() {

  return (
    <BrowserRouter>
      <ResetPasswordPage />
    </BrowserRouter>
  )
}

export default App

