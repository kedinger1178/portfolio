import { useState } from "react";
import { Link } from "react-router-dom";
import images from '../../images/imageIndex.js';
import styles from './navBar.module.scss';

function NavBar() {
    return(
        <div className={styles.navBarSection}>
            <div className={styles.navBar}>
                <div className={styles.navLogo}>
                    <Link to="/" end role="img" aria-label="Logo"><img src={images.navLogo} className={styles.navIcon} alt="Kendra E logo"></img></Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link 
                            to="/portfolio" className={styles.link}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" className={styles.link}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
