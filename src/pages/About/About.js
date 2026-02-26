
import Footer from "../../components/Footer/Footer.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import images from '../../images/imageIndex.js';

import './aboutMe.scss';

function About() {
  return (
    <div className='page-about'>
        <header className='no-image-hero'>
            <div className='hero-details'>
                <h1 className='no-image-title'>Nice to meet you!</h1>
            </div>
        </header>
        <section className='body'>
            <section id='aboutMe' className='about-section'>
                <div className='about-me'>
                    <div className='about-body'>
                        <div className='me' role="img" aria-label="Me at the park">
                            <img src={images.meWithDogs} className="pic-about"></img>
                            <div className='connect-info-top'>
                                <h3 className='section-title'>Let&#39;s Connect!</h3>
                                <div className='icon-info-pair'>
                                    <div className='email'>
                                        <a href="mailto:kedinger78@hotmail.com">
                                            <i className="fa fa-envelope"></i>
                                            <span>kedinger78@gmail.com</span>
                                        </a>
                                    </div>
                                    <div className='LinkedIn'>
                                        <a href='https://www.linkedin.com/in/kendra-edinger/' target="_blank" aria-label="LinkedIn Profile">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            <span>LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                                <p>Have any questions? I would love to discuss anything UX design, movies, dogs or fine art related.</p>
                            </div>
                        </div>
                        <div className='about-details'>
                            <p>I&#39;m Kendra, a UX Designer and UI Developer who thrives at the intersection of design and development. With a strong foundation in user experience strategy and modern front-end technologies, I create intuitive, accessible, and visually engaging digital experiences that balance creativity with structure.</p>
                            <p>My background includes designing and building interfaces using Figma, HTML, CSS, JavaScript, and frameworks such as React, Angular, Vue, and Bootstrap. I don&#39;t just design solutions — I bring them to life. From early research and workflow mapping to high-fidelity prototypes and implementation, I focus on delivering seamless, user-centered experiences.</p>
                            <p>I&#39;m detail-oriented, highly organized, and energized by solving complex problems. I enjoy working in fast-paced environments where thoughtful design, clean code, and strong collaboration come together to create meaningful impact.</p>
                            <p>Beyond my love for UX, I recharge by taking my dogs to the park, diving into great films, solving challenging puzzles, and collecting fine art. Whether I&#39;m studying composition in a film scene, analyzing the structure of a puzzle, or appreciating the balance of a piece of art, I&#39;m constantly inspired by design in all its forms.</p>
                            <p>Above all, I am passionate about crafting experiences that feel effortless to users — because great UX isn&#39;t just how something looks, it&#39;s how it works.</p>
                        </div>
                        <div className='contact-info-bottom'>
                            <h3 className='section-title'>Let&#39;s Connect!</h3>
                            <div className='icon-info-pair'>
                                <div className='email'>
                                    <a href="mailto:kedinger78@hotmail.com">
                                        <i className="fa fa-envelope"></i>
                                        <span>kedinger78@gmail.com</span>
                                    </a>
                                </div>
                                <div className='LinkedIn'>
                                    <a href='https://www.linkedin.com/in/kendra-edinger/' target="_blank" aria-label="LinkedIn Profile">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <p>I would love to discuss anything UX design, movies, dogs or fine art related.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='section contact-section'>
                <div className='contact'>
                    <div className="section-header">
                        <hr></hr>
                        <h3 className='section-title caps'>CONTACT ME</h3>
                        <hr></hr>
                    </div>
                    <div className='contact-body'>
                        <div className='contact-form'>
                            <ContactForm />
                        </div>
                        <div className='image' role="img" aria-label="Me with Zoey">
                            <img src={images.meWithZoey} className="pic-about"></img>
                        </div>
                    </div>
                    
                </div>
            </section>
        </section>
    </div>
  );
}

export default About;