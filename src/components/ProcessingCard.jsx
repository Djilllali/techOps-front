import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const ProcessingCard = ({ uploadProgress, link, handleDownload }) => {
  return (
    <>
      {uploadProgress === 100 && (
        <div className="file-card">
          {link ? (
            <button className="download-btn" onClick={handleDownload}>
              download
            </button>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PacmanLoader color="rgb(117,102,251)" size={15} />{" "}
              <span style={{ marginLeft: "9em" }}>Processing file</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProcessingCard;
