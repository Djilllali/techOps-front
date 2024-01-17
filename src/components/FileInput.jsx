import React from "react";

const FileInput = ({ fileInputRef, handleFileChange, onFileChosen }) => {
  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button className="file-btn" onClick={onFileChosen}>
        <span className="material-symbols-outlined">upload</span> Upload File
      </button>
    </div>
  );
};

export default FileInput;
