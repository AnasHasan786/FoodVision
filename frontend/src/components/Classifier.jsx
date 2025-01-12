import React, { useState } from "react";
import "./Classifier.css";
import classifier_img from "../assets/classifier_image.jpg";

function Classifier() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setSelectedFile(URL.createObjectURL(uploadedFile)); 
    setFile(uploadedFile); 
  };

  const handleUpload = async (file) => {
    if (!file) {
      setResult("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/classify", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: "Unknown server error" };
        }
        setResult(`Error: ${errorData.error || "Something went wrong!"}`);
      } else {
        const data = await response.json();
        setResult(`Prediction: ${data.label}`);
      }
    } catch (error) {
      setResult(`Failed to fetch: ${error.message}`);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setFile(null);
    setResult("");
  };

  return (
    <div className="classifier-container">
      <div className="classifier">
        <h1 className="title">Food Classifier</h1>
        <p className="subtitle">
          Predict dish categories from images using a deep learning-powered
          classifier model.
        </p>

        {selectedFile && (
          <div className="image-preview">
            <img src={selectedFile} alt="Uploaded" className="uploaded-image" />
          </div>
        )}

        <div className="upload-controls">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="file-upload"
            className="file-input"
          />
          <label htmlFor="file-upload" className="upload-label">
            Choose File
          </label>
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>

        <div className="classify-row">
          <button onClick={() => handleUpload(file)} className="upload-button">
            Classify Image
          </button>
        </div>

        {result && <h3 className="result">{result}</h3>}
      </div>
    </div>
  );
}

export default Classifier;
