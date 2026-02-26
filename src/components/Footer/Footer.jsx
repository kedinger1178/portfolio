import { useState } from "react";
import styles from './footer.module.scss';
import images from '../../images/imageIndex.js';

function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.letsConnect}>
                
                <div className={styles.footerLogo} role="img" aria-label="Logo">
                    <img src={images.navLogo} className={styles.navIcon} alt="Kendra E logo"></img>
                </div>
                <div className={styles.letsConnectLinks}>
                    <h3 className={styles.sectionTitle}>Let&#39;s chat!</h3>
                    <div className={styles.resume}>
                        <a href="resume.pdf" target="_blank"> My resume</a>
                    </div>
                    <div className={styles.email}>
                        <a href="mailto:kedinger78@gmail.com">
                            <span>kedinger78@gmail.com</span>
                        </a>
                    </div>
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/kendra-edinger/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                <p>&copy; 2026 Kendra Edinger. All rights reserved. </p>
            </div>
        </footer>
    );
}

export default Footer;
