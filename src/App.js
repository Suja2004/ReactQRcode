import React from 'react';
import './App.css';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeScanner from './components/QRCodeScanner';

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator and Scanner</h1>
      <div className='slider-wrapper'>
        <div className="main">
          <QRCodeGenerator />
          <QRCodeScanner />
        </div>
        <div className='slider-nav'>
          <a href="#slide1">&lt;</a>
          <a href="#slide2">&gt;</a>
        </div>
      </div>
    </div>
  );
}

export default App;
