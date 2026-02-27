
import images from '../../images/imageIndex.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem.jsx";

import './portfolio.scss';

function Portfolio() {
    const navigate = useNavigate();

    return (
        <div className='page page-portfolio'>
            <header className='no-image-hero'>
                <div className='hero-details'>
                    <h1 className='no-image-title'>Portfolio</h1>
                </div>
            </header>
            <div className='body'>
                <section id='caseStudy' className='section case-studies-section'>
                    <div className='section-list case-studies'>
                        <div className="section-header">
                            <hr></hr>
                            <h3 className='section-title caps'>UX Case Studies</h3>
                            <hr></hr>
                        </div>
                        <div className='portfolio-body'>
                            <div className="portfolio-item" onClick={() => navigate("/publishAwards")}>
                                <div className="item-image" role="img" aria-label="Publish Awards">
                                    <img src={images.pubAwards} alt="Publish Awards"></img>
                                </div>
                                <div className="item-text">
                                    <div className="item-title">Publish Awards</div>
                                    <p className="item-roles">UX Designer and UI Developer</p>
                                </div>
                                <div className="app-list">
                                    <span>Figma</span>
                                    <span>HTML/CSS</span>
                                    <span>React</span>
                                </div>
                            </div>
                            <div className="portfolio-item" onClick={() => navigate("/manualCheckQueue")}>
                                <div className="item-image" role="img" aria-label="Manual Check Queue">
                                    <img src={images.manCheckQueue} className="man-check-queue" alt="Manual Check Queue"></img>
                                </div>
                                <div className="item-text">
                                    <div className="item-title">Manual Check Queue</div>
                                    <p className="item-roles">UX Designer</p>
                                </div>
                                <div className="app-list">
                                    <span>Figma</span>
                                    <span>HTML/CSS</span>
                                    <span>Vue.js</span>
                                </div>
                            </div>
                            <div className="portfolio-item" onClick={() => navigate("/abuserList")}>
                                <div className="item-image" role="img" aria-label="Abuser List">
                                    <img src={images.abuserList} alt="Abuser List"></img>
                                </div>
                                <div className="item-text">
                                    <div className="item-title">Abuser List</div>
                                    <p className="item-roles">UX Designer</p>
                                </div>
                                <div className="app-list">
                                    <span>Figma</span>
                                    <span>HTML/CSS</span>
                                    <span>Vue.js</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='webDesign' className='section web-design-dev-section'>
                    <div className='section-list'>
                        <div className="section-header">
                            <hr></hr>
                            <h3 className='section-title caps'>Web Designs</h3>
                            <hr></hr>
                        </div>
                        {/* //Nationwide */}
                        <div className="web-design-dev-body">
                            <h3>Nationwide Insurance</h3>
                            <div className='portfolio-body'>
                                <a href="https://nationwidefinancial.com/carematters-quick-quote/carematters-quick-quote-intro" target="_blank" className="portfolio-item">
                                    <div className="item-image" role="img" aria-label="CareMatters Quick Quote">
                                        <img src={images.natCare} alt="CareMatters Quick Quote"></img>
                                    </div>
                                    <div className="item-text">
                                        <div className="item-title">CareMatters Quick Quote</div>
                                        <p className="item-roles">Creative Technologist</p>
                                        <p className="item-desc">Communicated with the engineers on UI development and styling best practices.</p>
                                    </div>
                                    <div className="app-list">
                                        <span>HTML/CSS</span>
                                    </div> 
                                </a>
                                <PortfolioItem 
                                    imgSrc={images.natMyIRP} 
                                    lightboxImg={images.natMyIRPLg}
                                    alt={"MyIRP Demo"} 
                                    title={"MyIRP Demo"} 
                                    role={"Creative Technologist"} 
                                    descs={["Built a duplicate of the ISC demo and reconfigured it to include RSC pages for the new MyIRP application."]}
                                    apps={["HTML/CSS", "JavaScript"]}
                                ></PortfolioItem>
                                <PortfolioItem 
                                    imgSrc={images.natMutualFund} 
                                    lightboxImg={images.natMutualFundLg}
                                    alt={"Mutual Fund"} 
                                    title={"Mutual Fund"} 
                                    role={"Creative Technologist"} 
                                    descs={["Built the UI main sections and components of the new design for Nationwid's Mutual Fund pages."]}
                                    apps={["HTML/CSS", "JavaScript"]}
                                ></PortfolioItem>   
                            </div>
                        </div>
                        {/* //InSource Pro */}
                        <div className="web-design-dev-body">
                            <h3>InSource Pro</h3>
                            <div className='portfolio-body'>
                                <PortfolioItem 
                                    imgSrc={images.aceDocs} 
                                    lightboxImg={images.aceDocsLg}
                                    alt={"ACE Documentation App"} 
                                    title={"ACE Documentation App"} 
                                    role={"JavaScript Developer"} 
                                    descs={["Internal project consisting of ACE framework documentation.", "Produced wireframes, designed mockups and developed the user interface."]}
                                    apps={["HTML/CSS", "ACE Framework", "JavaScript"]}
                                ></PortfolioItem> 
                                <PortfolioItem 
                                    imgSrc={images.projectTracker} 
                                    lightboxImg={images.projectTrackerLg}
                                    alt={"Project Tracker App"} 
                                    title={"Project Tracker App"} 
                                    role={"JavaScript Developer"} 
                                    descs={["Internal project to organize and track all company tasks (clients, projects and tasks).", "Produced wireframes, designed mockups and developed the user interface."]}
                                    apps={["HTML/CSS", "ACE Framework", "JavaScript"]}
                                ></PortfolioItem> 
                            </div>
                        </div>
                        {/* //Jegs */}
                        <div className="web-design-dev-body">
                            <h3>Jegs</h3>
                            <div className='portfolio-body'>
                                <a href="http://www.jegs.com/s/customercare/foundation.html" target="_blank" className="portfolio-item">
                                    <div className="item-image" role="img" aria-label="Foundation Page">
                                        <img src={images.foundation} alt="Foundation Page"></img>
                                    </div>
                                    <div className="item-text">
                                        <div className="item-title">Foundation Page</div>
                                        <p className="item-roles">Javascript Developer</p>
                                        <p className="item-desc">Redesign JEGS foundation page to incorporate the many colors of Cancer ribbons into the companies racing theme</p>
                                        
                                    </div>
                                    <div className="app-list">
                                        <span>HTML/CSS</span>
                                        <span>Photoshop</span>
                                    </div>
                                </a>
                                <a href="http://www.jegs.com/wheels/makeyourbrakesblush.html" target="_blank" className="portfolio-item">
                                    <div className="item-image" role="img" aria-label="Wheel Marketing Campaign">
                                        <img src={images.wheels} alt="Wheel Marketing Campaign"></img>
                                    </div>
                                    <div className="item-text">
                                        <div className="item-title">Wheel Marketing Campaign</div>
                                        <p className="item-roles">Web Designer</p>
                                        <p className="item-desc">Designed the user interface for a marketing campaign centered around selling three types of wheels based on four brands.</p>
                                        
                                    </div>
                                    <div className="app-list">
                                        <span>HTML/CSS</span>
                                        <span>Photoshop</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Portfolio;