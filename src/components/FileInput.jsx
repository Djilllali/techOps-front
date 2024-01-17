import React from "react";
/**
 * Composant FileInput pour gérer la sélection de fichiers.
 *
 * @component
 * @example
 * // Exemple d'utilisation :
 * <FileInput
 *   fileInputRef={fileInputRef}
 *   handleFileChange={handleFileChange}
 *   onFileChosen={onFileChosen}
 * />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.fileInputRef - La référence à l'élément d'entrée de fichier.
 * @param {function} props.handleFileChange - Fonction pour gérer l'événement de changement de fichier.
 * @param {function} props.onFileChosen - Fonction pour déclencher la sélection de fichier.
 * @returns {JSX.Element} Composant React.
 */

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
        <span className="material-symbols-outlined">upload</span> Select a file
      </button>
    </div>
  );
};

export default FileInput;
