import React, { useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeScanner = () => {
  const [scannerInitialized, setScannerInitialized] = useState(false);
  const [scanning, setScanning] = useState(false);

  // Start the scanner
  const startScanner = () => {
    if (!scannerInitialized) {
      const scanner = new Html5QrcodeScanner("scanner", {
        fps: 10, 
        qrbox: 250, 
      });

      scanner.render(successCallback, errorCallback);
      setScannerInitialized(true);
    }
    setScanning(true); 
  };

  const successCallback = (decodedText, decodedResult) => {
    console.log('QR Code decoded: ', decodedText);
  };

  const errorCallback = (error) => {
    console.error('QR Code scanning error: ', error);
  };

  return (
    <div className="container" id="slide2">
      <h2>QR Code Scanner</h2>

      {!scanning ? (
        <button onClick={startScanner}>Start Scanning</button>
      ) : (
        <>
        </>
      )}

      <div id="scanner-container">
        <div id="scanner"></div>
      </div>
    </div>
  );
};

export default QRCodeScanner;
