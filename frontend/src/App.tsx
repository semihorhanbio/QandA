import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
