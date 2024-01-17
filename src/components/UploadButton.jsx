import React from "react";

/**
 * Composant UploadButton pour gérer l'action de téléchargement.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <UploadButton
 *   uploadStatus={uploadStatus}
 *   handleUpload={handleUpload}
 * />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.uploadStatus - Le statut de téléchargement.
 * @param {function} props.handleUpload - Fonction pour gérer l'action de téléchargement.
 * @returns {JSX.Element} Composant React.
 */
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
