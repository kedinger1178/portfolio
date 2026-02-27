import React from "react";
import '../../styles/main.scss';
import styles from './lightbox.module.scss';


function LightboxDiv({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.csslightbox} onClick={onClose}>
        <div className={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            {children}
            <button 
                type="button" 
                className="button primary" 
                onClick={(e) => {
                    e.stopPropagation(); // just in case
                    console.log("clicked button");
                    onClose();
                }}
            >
                Close
            </button>
            
        </div>
    </div>
  );
}

export default LightboxDiv;