import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className='container' id="slide1">
      <h2>QR Code Generator</h2>
      <input 
        type="text" 
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text for QR Code"
      />
      <div className='code'>
        {inputText && <QRCode value={inputText} />}
      </div>
    </div>
  );
}

export default QRCodeGenerator;
