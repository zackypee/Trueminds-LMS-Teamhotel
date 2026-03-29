import { useState } from 'react'
import { ResetPasswordPage } from './features/auth/pages/ResetPasswordPage'
import { BrowserRouter } from "react-router-dom";
import { Button } from './components/Button';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <ResetPasswordPage />
      
    </BrowserRouter>
  )
}

export default App

