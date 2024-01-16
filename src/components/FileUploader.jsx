import React, { useRef, useState } from "react";

const FileUploader = () => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({
    percentage: 0,
    visible: false,
  });
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    setSnackbarOpen(false);
    setLoading(true);
    setProgress({ percentage: 0, visible: true });

    try {
      const formData = new FormData();
      formData.append("csvFile", file);

      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress((prevProgress) => ({
              ...prevProgress,
              percentage: progress,
            }));
          },
        }
      );

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error(
        "Error uploading file:",
        error.response?.data || error.message
      );
      setSnackbarMessage("Error uploading file. Please try again.");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
      setProgress({ percentage: 0, visible: false });
    }
  };
  return (
    <div>
      <input ref={inputRef} type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="file-btn"
      >
        <span className="material-symbols-outlined">upload</span>
        {loading ? "Uploading..." : "Upload CSV"}
      </button>
    </div>
  );
};

export default FileUploader;
