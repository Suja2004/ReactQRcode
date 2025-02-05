import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [inputText, setInputText] = useState('');
  const qrCodeRef = useRef(null); 

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to download the QR code
  const handleDownload = () => {
    const svgElement = qrCodeRef.current.querySelector('svg'); 
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = pngFile;
      downloadLink.download = 'qrcode.png';
      downloadLink.click();
    };

    // Convert SVG to data URL
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
  };

  return (
    <div className="container" id="slide1">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text for QR Code"
      />
      <div className="code" ref={qrCodeRef}>
        {inputText && <QRCode value={inputText} />}
      </div>
      {inputText && (
        <button onClick={handleDownload} style={{ marginTop: '20px' }}>
          Download QR Code
        </button>
      )}
    </div>
  );
}

export default QRCodeGenerator;
