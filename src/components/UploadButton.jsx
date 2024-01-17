import React from "react";

const UploadButton = ({ uploadStatus, handleUpload }) => {
  return (
    <button className="upload-btn" onClick={handleUpload}>
      {uploadStatus === "select" || uploadStatus === "uploading"
        ? "Upload file"
        : "Done"}
    </button>
  );
};

export default UploadButton;
