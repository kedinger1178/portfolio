import images from '../../images/imageIndex.js';

import './manualCheckQueue.scss';
import '../../styles/caseStudy.scss';

function ManualCheckQueue() {
    return (
        <div className='page page-manual'>
            <header className='case-study-hero manual-check-hero'>
                <div className="case-study">
                    <div className='hero-text'>
                        <h1 className='no-image-title'>Manual Check Queue</h1>
                        <p>An experience built to streamline how accounting teams process mailed check payments.</p>
                    </div>
                    <div className="hero-image" role="img" aria-label="Hero Image">
                        <img src={images.manCheckHero} alt="Acounting hero"></img>
                    </div>
                </div>
            </header>
            <div className='body'>
                <section className='section overview-section'>
                    <div className='section-list overview'>
                        <div className="main-text">
                            <div className="text-block">
                                <h3 className='primary-color'>Overview</h3>
                                <p>A net-new workflow to support accounting operations users processing manual tasks, including complex scenarios such as partial payments and applying a single check across multiple invoices.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='primary-color'>Problem</h3>
                                <p>Critical accounting tasks were handled through fragmented, manual processes with no cohesive end-to-end workflow, resulting in inefficiencies, rework, and inconsistent outcomes.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='primary-color'>Opportunity</h3>
                                <p>The fragmented manual check workflow created unnecessary risk, rework, and cognitive strain for operations users. This presented an opportunity to streamline the process, reduce errors, and improve confidence in payment application while strengthening overall financial accuracy.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='primary-color'>Solution</h3>
                                <p>We designed a new workflow to provide a clear starting point for batch creation, intuitive invoice search, and guided payment application with strong confirmation feedback. The result reduced errors, improved processing speed, and increased user confidence in accurate financial reconciliation.</p>
                            </div>
                        </div>
                        <div className="secondary-text">
                            <div className="text-block">
                                <h5 className='primary-color'>Platform</h5>
                                <p>Web - Internal accounting operations tool</p>
                            </div>
                            <div className="text-block">
                                <h5 className='primary-color'>Project type</h5>
                                <p>Net-new Workflow</p>
                            </div>
                            <div className="text-block">
                                <h5 className='primary-color'>Tools used</h5>
                                <p>Figma</p>
                            </div>
                            <div className="text-block">
                                <h5 className='primary-color'>My role</h5>
                                <p>UI/UX Designer</p>
                            </div>
                            <div className="text-block">
                                <h5 className='primary-color'>Team</h5>
                                <p>Product manager, Accounting Team, Engineers</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section design-process-section manual-design-process-section'>
                    <div className='section-list design-process'>
                        <h3>Design Process</h3>
                        <div className="design-process-body">
                            <div className="step bullet-list-group">
                                <h4>Define & Discover</h4>
                                <ul>
                                    <li>Understand the problem</li>
                                    <li>Ask questions</li>
                                    <li>Gather information</li>
                                    
                                </ul>
                            </div>
                            <div className="step bullet-list-group">
                                <h4>Design</h4>
                                <ul>
                                    <li>User flows</li>
                                    <li>Wireframing</li>
                                    <li>UI Design Mockups</li>
                                </ul>
                            </div>
                            <div className="step bullet-list-group">
                                <h4>Refine</h4>
                                <ul>
                                    <li>Figma prototyping</li>
                                    <li>Iterations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section process-sections"> 
                    <div className="section-list processes">
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Define & Discover</h6>
                                <h2 className='primary-color'>What is the problem we are solving?</h2>
                            </div>
                            <div className="process-body">
                                <p>I conducted a series of iterative discovery sessions with the accounting team and project manager to gain a comprehensive understanding of their end-to-end workflow. The team walked me through their current process, which involved manually scanning mailed checks and supporting documentation to reconcile and apply payments to invoices. </p>
                                <div className="bullet-list-group">
                                    <p>To uncover pain points and inefficiencies, I asked targeted questions such as:</p>
                                    <ul>
                                        <li>What does your manual process look like from start to finish?</li>
                                        <li>How long does each batch typically take to complete?</li>
                                        <li>How many accounts or systems do you interact with during processing?</li>
                                        <li>How often is additional client research required to match payments to invoices?</li>
                                    </ul>
                                </div>
                                <p>These conversations surfaced key friction points, time constraints, and accuracy risks within the payment workflow, ultimately leading to the development of a focused 4-Step Decision Design that streamlined processing and reduced manual effort.</p>
                                <div className="image" role="img" aria-label="Accounting Dashboard">
                                    <img src={images.accountingDashboard} alt="Accounting dashoboard"></img>
                                </div>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Design</h6>
                                <h2 className='primary-color'>4-Step Decision Design</h2>
                                <div className="step-decision-design-text">
                                    <div className="step-decision">
                                        <span>Starting Batch</span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className="step-decision">
                                        <span>Check Details</span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className="step-decision">
                                        <span>Search & Select Invoices</span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    <div className="step-decision">
                                        <span>Apply Check as Payment</span>
                                    </div>    
                                </div>
                            </div>
                            <div className="process-body">
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Decision 1: Starting Manual Check Queue Batch</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>User research revealed the need for two distinct entry points into the Manual Check Queue from the Accounting Dashboard: the Checks Dashboard and the “Take Batch” button. This design decision was driven by how accounting operations naturally engage with payments—either by monitoring overall check activity or by immediately claiming and processing a specific batch. Providing both pathways aligned the interface with real-world workflows, reducing friction and supporting more efficient task execution.</p>
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.accountingDashWithZoom} alt="Take Batch Start"></img>
                                        </div> 
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Decision 2: Check Details</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>Once inside an individual check, I streamlined the experience by minimizing visual distractions and thoughtfully grouping related information into clear, contextual sections. This reduced cognitive load and eliminated the need for reviewers to toggle between systems or rely on memory to complete their tasks.</p>
                                        <p>I also introduced a dedicated search input area, enabling users to look up additional invoice or account details beyond what was provided by the client. This empowered accounting operations to validate payments more efficiently and resolve discrepancies without leaving the workflow.</p>                                    
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.takeBatch} alt="Take Batch Start"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Decision 3: Search & Select Invoices</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>After capturing all relevant client, company, and payer information, the user can seamlessly search for and select invoices that correspond to the received payment.</p>
                                        <p>To streamline this step, I introduced filtering capabilities that allow users to quickly narrow down invoice results, making large datasets easier to scan and manage. As invoices are selected, the interface dynamically displays them in a dedicated summary section and automatically calculates the remaining payment balance. This real-time feedback supports accuracy, prevents over- or under-application of funds, and gives users clear confidence before finalizing the transaction.</p>
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.searchSave} alt="Take Batch Start"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Decision 4: Apply Check as Payment</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>Resolution actions were intentionally designed to be clear and explicit, reducing the risk of accidental decisions at a critical step in the workflow. Distinct system states and confirmation patterns reinforced user confidence, accuracy, and accountability before finalizing any action.</p>
                                        <p>Users are able to apply a payment to a single invoice or distribute it across multiple invoices, with the flexibility to make either full or partial payments. This ensured the system supported real-world payment scenarios while maintaining clarity and control throughout the resolution process.</p>
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.applyPayment} alt="Take Batch Start"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Refine</h6>
                                <h2 className='primary-color'>Stress-Testing the Experience</h2>
                            </div>
                            <div className="process-body">
                                <p>I developed a low-fidelity prototype in Figma to simulate multiple real-world processing scenarios and validate the workflow early. This prototype functioned more as a guided tour of different scenarios, allowing users to observe how the system would respond under various conditions rather than fully interact with a high-fidelity build.</p>
                                <p>The prototype walked users through three distinct paths. The first was the “Happy Path,” representing an ideal scenario where documentation was complete and payments matched invoices without issue. The second path introduced minor errors, allowing users to experience system indicators, alerts, and validation states in a controlled environment. The third, more complex “Edge Case” path, showcased the most extreme scenarios the accounting team had encountered—such as missing information, mismatched amounts, or unclear payer details.</p>
                                <p>Within these scenarios, users were also introduced to the ability to mark a check as a “Problem” at any point in the process. The prototype demonstrated how this action would route the check to a separate queue for further investigation and clarification. Users also had the ability to remove the check from the active batch entirely, ensuring complex or unclear payments would not slow down overall processing.</p>
                                <p>Designing for these varying conditions ensured the solution accounted for both standard and high-friction cases. Walking through each path with the accounting team generated valuable feedback, clarified edge-case requirements, and directly informed refinements that shaped the final design. Although the final application did not move into engineering due to shifting project priorities, the discovery, validation, and design work established a strong foundation for future implementation.</p>
                                <div className="image-group">
                                    <div className="image" role="img" aria-label="Details with Dropdown">
                                        <img src={images.checkDetailsWithDropdown} alt="Details with Dropdown"></img>
                                        <p>Check Details Page - Displays an action dropdown with options to “Remove from Batch” or “Save as Problem,” giving users clear, immediate control over how to handle the check</p>
                                    </div> 
                                    <div className="image" role="img" aria-label="Problem Check Details">
                                        <img src={images.problemCheck} alt="Problem Check Details"></img>
                                        <p>Problem Check Details Page - Displays clear visual indicators and contextual messaging that explain why the check has been flagged as a problem</p>
                                    </div> 
                                    <div className="image" role="img" aria-label="Apply Payment with Errors">
                                        <img src={images.payWithError} alt="Apply Payment with Errors"></img>
                                        <p>Apply as Payment Page – Displays clear error states with visual indicators and contextual messaging</p>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section outcome-section'>
                    <div className='section-list outcome'>
                        <h2 className='primary-color'>Outcome & Impact</h2>
                        <div className="outcome-body">
                            <p>The redesigned Manual Check Queue reduced cognitive load and boosted reviewer confidence in a high-volume, high-stakes workflow. By clarifying queue priorities and improving information hierarchy, reviewers could quickly assess status, focus on the right checks, and move through work without losing context. Support for real-world edge cases—like partial payments, multi-invoice checks, and remaining balance visibility—eliminated ambiguity and removed the need for external calculations, enabling faster, more accurate decision-making.</p>
                            <p>Stronger visual hierarchy, clear system states, and precise financial language increased trust in the workflow and led to more consistent decisions across teams. Overall, the redesign transformed a fragile, calculation-heavy process into a focused, decision-ready experience that enhanced both user confidence and operational efficiency.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ManualCheckQueue;