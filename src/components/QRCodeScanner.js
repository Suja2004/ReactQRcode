import React, { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRCodeScanner = () => {
  const [scannerInitialized, setScannerInitialized] = useState(false);
  const [scanning, setScanning] = useState(false);
  // const [result, setResult] = useState(null);

  const startScanner = () => {
    if (!scannerInitialized) {
      const scanner = new Html5QrcodeScanner("scanner", {
        fps: 10, // Frames per second
        qrbox: 250, // Scanning box size
      });

      scanner.render(successCallback, errorCallback);
      setScannerInitialized(true);
    }
    setScanning(true);
  };

  const successCallback = (decodedText, decodedResult) => {
    console.log("QR Code decoded:", decodedText);
    // setResult(decodedText);

    // Redirect to URL if valid
    if (isValidURL(decodedText)) {
      const userConfirmed = window.confirm(
        `The QR code contains the URL: ${decodedText}. Do you want to open it?`
      );

      if (userConfirmed) {
        window.location.href = decodedText;
      } else {
        console.log("Redirection canceled by the user.");
      }
    } else {
      alert(`Scanned text: ${decodedText}`);
    }
  };

  const errorCallback = (errorMessage) => {
    if (
      errorMessage.includes("No MultiFormat Readers were able to detect the code")
    ) {
      return;
    }
    console.error("QR Code scanning error:", errorMessage);
  };



  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="container" id="slide2">
      <h2>QR Code Scanner</h2>

      {!scanning ? (
        <button onClick={startScanner}>Start Scanning</button>
      ) : (
        // <p>
        //   Scanned QR Code Data: <strong>{result}</strong>
        // </p>
        ""
      )}

      <div id="scanner-container">
        <div id="scanner" className="scanner"></div>
      </div>


    </div>
  );
};

export default QRCodeScanner;
