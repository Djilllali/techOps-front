import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

/**
 * Composant ProcessingCard pour afficher des informations sur le traitement du fichier.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <ProcessingCard
 *   uploadProgress={uploadProgress}
 *   link={link}
 *   handleDownload={handleDownload}
 * />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.uploadProgress - Le pourcentage de progression du téléchargement.
 * @param {Object} props.link - L'objet de lien pour le téléchargement.
 * @param {function} props.handleDownload - Fonction pour gérer le téléchargement.
 * @returns {JSX.Element} Composant React.
 */

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
