import React, { useEffect } from "react";
import '../../styles/main.scss';
import styles from './lightbox.module.scss';


function LightboxDiv({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`; // disable scrolling
        } else {
            document.body.style.overflow = ""; // restore scrolling
            document.body.style.paddingRight = "0px";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen]);

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