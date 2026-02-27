import React, { useState } from "react";
import styles from './portfolioItem.module.scss';
import '../../styles/main.scss';
import Lightbox from "../Lightbox/Lightbox";

function PortfolioItem({ imgSrc, lightboxImg, alt, title, role, descs, apps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["portfolio-item-parent"]}>
        <div className={styles["portfolio-item"]} onClick={() => setIsOpen(true)}>
        {/* The div with the image */}
        <div className={styles["item-image"]} role="img" aria-label="MyIRP Demo">
            <img src={imgSrc} alt={alt} />
        </div>
            <div className={styles["item-text"]}>
                <div className={styles["item-title"]}>{title}</div>
                <p className={styles["item-roles"]}>{role}</p>
                {descs.map((desc, index) => (
                    <p className={styles["item-desc"]} key={index}>{desc}</p>
                ))}   
            </div>
            <div className={styles["app-list"]}>
                {apps.map((app, index) => (
                    <span key={index}>{app}</span>
                ))}
            </div>   
        </div>
        <Lightbox 
            imgSrc={lightboxImg} 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
        >
            <img src={lightboxImg} alt={alt} />
        </Lightbox>
    </div>
  );
}

export default PortfolioItem;