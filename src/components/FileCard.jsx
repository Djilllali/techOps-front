import React from "react";
/**
 * Composant FileCard pour afficher des informations sur le fichier sélectionné.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <FileCard
 *   selectedFile={selectedFile}
 *   uploadProgress={uploadProgress}
 *   uploadStatus={uploadStatus}
 *   clearFileInput={clearFileInput}
 * />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.selectedFile - L'objet de fichier sélectionné.
 * @param {number} props.uploadProgress - Le pourcentage de progression du téléchargement.
 * @param {string} props.uploadStatus - Le statut de téléchargement.
 * @param {function} props.clearFileInput - Fonction pour effacer le fichier sélectionné.
 * @returns {JSX.Element} Composant React.
 */
const FileCard = ({
  selectedFile,
  uploadProgress,
  uploadStatus,
  clearFileInput,
}) => {
  return (
    <div className="file-card">
      <span className="material-symbols-outlined icon">description</span>

      <div className="file-info">
        <div style={{ flex: 1 }}>
          <h6>{selectedFile?.name}</h6>

          <div className="progress-bg">
            <div className="progress" style={{ width: `${uploadProgress}%` }} />
          </div>
        </div>

        {uploadStatus === "select" ? (
          <button onClick={clearFileInput}>
            <span className="material-symbols-outlined close-icon">close</span>
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
