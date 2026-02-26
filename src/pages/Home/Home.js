
import Footer from "../../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import images from '../../images/imageIndex.js';

import './home.scss';

function Home() {
    const navigate = useNavigate();
    return (
    <div className='page'>
        <header className='hero'>
            <div className='hero-details'>
                <h1 className='name'>KENDRA E.</h1>
                <h2 className='occupation'>UX DESIGNER & UI DEVELOPER</h2>
                <span className='short-info'>Designing clarity through structured experiences.</span>
            </div>
        </header>
        <section className='body'>
            <section id='about' className='section about-me-section'>
                <div className='section-list'>
                    <div className="section-header">
                        <hr></hr>
                        <h3 className='section-title caps'>About Me</h3>
                        <hr></hr>
                    </div>
                    <div className='about-me-body'>
                        <div className='portrait' role="img" aria-label="Portrait">
                            <img src={images.portrait} className="pic" alt="Portrait"></img>
                        </div>
                        <div className='about-details'>
                            <p>Hello, I'm Kendra, a UX Designer and UI Developer based in Columbus, Ohio.</p>
                            <p>With a strong foundation in UX design and modern front-end technologies, I bring ideas to life from concept to implementation, collaborating with cross-functional teams to build seamless, engaging interfaces that improve usability and drive impact. Detail-oriented and energized by problem-solving, I’m passionate about creating experiences that feel effortless to users.</p>
                            <p>Outside of UX, I enjoy taking my dogs to the park, exploring great films, solving puzzles, and collecting fine art — all of which continue to inspire my appreciation for thoughtful design.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='portfolio' className='section portfolio-section'>
                <div className='section-list'>
                    <div className="section-header">
                        <hr></hr>
                        <h3 className='section-title caps'>Case Studies</h3>
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
                    <div className="portfolio-footer">
                        <button type="button" className="button primary" onClick={() => navigate("/portfolio")}>View Portfolio &nbsp;&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></button> 
                    </div> 
                </div>
            </section>
            <section id='skills' className='section skills-section'>
                <div className='section-list'>
                    <div className="section-header">
                        <hr></hr>
                        <h3 className='section-title caps'>Skills</h3>
                        <hr></hr>
                    </div>
                    <div className='my-skills-body'>
                        <div className='skills-card'>
                            <div className='skill-item'>
                                <span>UX Design</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '90%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>Figma</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '75%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>Prototyping</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '60%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>Accessibility</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '75%' }}></span>
                                </div>
                            </div>
                        </div>
                        <div className='skills-card'>
                            <div className='skill-item'>
                                <span>UI Development</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '55%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>HTML/CSS/SASS</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '75%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>JavaScript</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '45%' }}></span>
                                </div>
                            </div>
                            <div className='skill-item'>
                                <span>React/Typescript</span>
                                <div className='progress-bar'>
                                    <span className='progress' style={{ width: '45%' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
    );
}

export default Home;