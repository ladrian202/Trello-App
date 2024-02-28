import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Illustration from './components/illustration';
import Logo from './components/logo';

function App() {
  return (
    <>
    <Logo />
    <div className="login-content">
      <Login />
      <Illustration />
    </div>
    </>
  )
}

export default App
