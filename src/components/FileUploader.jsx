import React, { useRef, useState } from "react";
import "./FileUpload.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const FileUploader = () => {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [link, setLink] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      // Check if the file is a CSV file
      if (file.type !== "text/csv") {
        toast.error("Please select a CSV file.");
        return;
      }

      setSelectedFile(file);
    }
  };

  const onFileChosen = () => {
    fileInputRef.current.click();
  };


  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {!selectedFile && (
        <button className="file-btn" onClick={onFileChosen}>
          <span className="material-symbols-outlined">upload</span> Upload File
        </button>
      )}

      
  );
};

export default FileUploader;
