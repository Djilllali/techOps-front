import React from "react";

const FileCard = ({ selectedFile, uploadProgress, uploadStatus, clearFileInput }) => {
  return (
    <div className="file-card">
      <span className="material-symbols-outlined icon">description</span>

      <div className="file-info">
        <div style={{ flex: 1 }}>
          <h6>{selectedFile?.name}</h6>

          <div className="progress-bg">
            <div
              className="progress"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>

        {uploadStatus === "select" ? (
          <button onClick={clearFileInput}>
            <span className="material-symbols-outlined close-icon">
              close
            </span>
          </button>
        ) : (
          <div className="check-circle">
            {uploadStatus === "uploading" ? (
              `${uploadProgress}%`
            ) : uploadStatus === "done" ? (
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                check
              </span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileCard;
