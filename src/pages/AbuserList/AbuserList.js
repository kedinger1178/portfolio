import images from '../../images/imageIndex.js';

import '../../styles/caseStudy.scss';
import './abuserList.scss';


function AbuserList() {
    return (
        <div className='page page-abuser'>
            <header className='case-study-hero abuse-list-hero'>
                <div className="case-study">
                    <div className='hero-text'>
                        <h1 className='no-image-title'>Abuser List</h1>
                        <p>An experience that helps fraud teams quickly investigate and spot risky new clients, by centralizing research and tracking in one place.</p>
                    </div>
                    <div className="hero-image" role="img" aria-label="Coming Soon">
                    <img src={images.comingSoon} alt="Coming Soon"></img>
                </div>
                </div>
            </header>
            <div className='body'>
                <div className='black'>
                    
                </div>
            </div>
        </div>
    );
}
export default AbuserList;