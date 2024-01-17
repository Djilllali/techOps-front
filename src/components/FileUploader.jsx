import React, { useRef, useState } from "react";
import "./FileUpload.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileInput from "./FileInput";
import FileCard from "./FileCard";
import ProcessingCard from "./ProcessingCard";
import UploadButton from "./UploadButton";

/**
 * Composant FileUploader pour gérer le téléchargement de fichiers.
 *
 * @component
 * @returns {JSX.Element} Composant React.
 */

const FileUploader = () => {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [link, setLink] = useState(null);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  /**
   * Fonction pour gérer le changement de fichier.
   *
   * @param {Object} event - L'événement de changement de fichier.
   */

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("file");
      // Check if the file is a CSV file
      if (file.type !== "text/csv") {
        toast.error("Please select a CSV file.");
        return;
      }

      setSelectedFile(file);
      console.log("selectedFile", selectedFile);
    }
  };
  /**
   * Fonction pour déclencher la sélection de fichier.
   */
  const onFileChosen = () => {
    console.log("click");
    fileInputRef.current.click();
  };
  /**
   * Fonction pour effacer le fichier sélectionné.
   */
  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadStatus("select");
  };
  /**
   * Fonction pour gérer le téléchargement  du fichier .zip finale.
   */
  const handleDownload = () => {
    link && window.open(apiUrl + link.downloadLink);
  };
  /**
   * Fonction pour gérer le téléchargement du fichier.
   */
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }

    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    setUploadStatus("uploading");
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
            progress === 100 && toast.success("File uploaded successfully");
          },
        }
      );

      setLink(response.data);
    } catch (error) {
      toast.error(error.response?.data || error.message);

      setUploadStatus("select");
    } finally {
      setUploadProgress(100);
      toast.success("File processed and zipped successfully");
      setUploadStatus("select");
    }
  };

  return (
    <div>
      {!selectedFile && (
        <FileInput
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          onFileChosen={onFileChosen}
        />
      )}
      {console.log("uploadStatus", uploadStatus)}
      {selectedFile && (
        <>
          <FileCard
            selectedFile={selectedFile}
            uploadProgress={uploadProgress}
            uploadStatus={uploadStatus}
            clearFileInput={clearFileInput}
          />
          <br />
          <ProcessingCard
            uploadProgress={uploadProgress}
            link={link}
            handleDownload={handleDownload}
          />

          {uploadProgress === 0 && (
            <UploadButton
              uploadStatus={uploadStatus}
              handleUpload={handleUpload}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FileUploader;
