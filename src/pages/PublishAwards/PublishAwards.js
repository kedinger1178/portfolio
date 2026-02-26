import images from '../../images/imageIndex.js';

import '../../styles/caseStudy.scss';
import './publishAwards.scss';


function PublishAwards() {
    return (
        <div className='page page-awards'>
            <header className='case-study-hero publish-awards-hero'>
                <div className="case-study">
                    <div className='hero-text'>
                        <h1 className='no-image-title'>Publish Awards</h1>
                        <p>An experience built to streamline a workflow for vacation bid administrators.</p>
                    </div>
                    <div className="hero-image" role="img" aria-label="Hero Image">
                        <img src={images.pubAwardsHero} alt="Acounting hero"></img>
                    </div>
                </div>
            </header>
            <div className='body'>
                <section className='section overview-section'>
                    <div className='section-list overview'>
                        <div className="main-text">
                            <div className="text-block">
                                <h3 className='purple'>Overview</h3>
                                <p>This project improved the Publish Awards experience for administrators managing complex PTO bid packages. The goal was to reduce publishing errors, increase visibility across bid rounds, and create a more confident final step before awarded time becomes employee-facing.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='purple'>Problem</h3>
                                <p>Administrators manage multiple bid rounds with varying rules, eligibility requirements, and award outcomes. It was difficult to quickly identify unpublished rounds, detect conflicts, and validate employee participation when switching between rounds. Because publishing PTO is a final action, limited status visibility increased the risk of error and reduced confidence in the workflow.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='purple'>Opportunity</h3>
                                <p>There was an opportunity to create a status-driven publishing experience that clearly surfaced unpublished rounds, preserved search context, and validated conflicts and eligibility before publishing. Success meant faster review, fewer errors, and stronger admin confidence in high-stakes actions.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='purple'>Solution</h3>
                                <p>The redesigned experience prioritized visibility and control. Unpublished rounds were clearly marked and sorted chronologically, with the system guiding admins to the next required action. Search and conflict filters became context-aware, displaying alerts when results did not apply to the selected round. Clear validation messaging and a controlled publish action ensured admins could review participants, confirm awards, and publish with confidence.</p>
                            </div>
                        </div>
                        <div className="secondary-text">
                            <div className="text-block">
                                <h5 className='purple'>Platform</h5>
                                <p>Web - Client Paid Time Off operations tool</p>
                            </div>
                            <div className="text-block">
                                <h5 className='purple'>Project type</h5>
                                <p>Net-new Workflow</p>
                            </div>
                            <div className="text-block">
                                <h5 className='purple'>Tools used</h5>
                                <p>Figma, HTML, CSS, Javascript</p>
                            </div>
                            <div className="text-block">
                                <h5 className='purple'>My role</h5>
                                <p>UX Designer & UI Developer</p>
                            </div>
                            <div className="text-block">
                                <h5 className='purple'>Team</h5>
                                <p>Product manager and Engineers</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section design-process-section publish-design-process-section'>
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
                                    <li>Iterations</li>
                                    <li>UI Development</li>
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
                                <h2 className='purple'>What problems are the users facing?</h2>
                            </div>
                            <div className="process-body">
                                <p>To understand the workflow, I evaluated the full PTO bid lifecycle with a focus on the transition from processing awards to publishing them. This phase represented a critical shift: once awards are published, they become employee-facing and difficult to reverse. Accuracy, visibility, and validation were essential.</p>
                                <p>Through stakeholder discussions and workflow analysis, several friction points emerged. Administrators needed to quickly identify which bid rounds were unpublished, validate participant eligibility, review conflicts, and confidently finalize awards. However, system state was not always immediately visible, filters did not consistently maintain context when switching rounds, and eligibility or participation errors surfaced late in the process. The workflow demanded precision but did not always support it clearly.</p>
                                <p>The core issue was not a lack of functionality — it was a lack of clarity. The opportunity was to design a status-driven experience that made system state explicit, reduced cognitive load, and supported confident publishing decisions.</p>
                                <div className="bullet-list-group">
                                    <h5>User Goals</h5>
                                    <ul>
                                        <li>Quickly identify which bid rounds require action</li>
                                        <li>Easily verify participant eligibility</li>
                                        <li>Detect and review conflicts before publishing</li>
                                        <li>Maintain filter and search context when navigating between rounds</li>
                                        <li>Publish awards with confidence and minimal risk</li>
                                    </ul>
                                </div>
                                <div className="bullet-list-group">
                                    <h5>Business Goals</h5>
                                    <ul>
                                        <li>Reduce publishing errors</li>
                                        <li>Improve administrative efficiency</li>
                                        <li>Increase visibility into round status and completion</li>
                                        <li>Minimize post-publication corrections</li>
                                        <li>Ensure accurate and compliant PTO processing</li>
                                    </ul>
                                </div>
                                <div className="bullet-list-group">
                                    <h5>Success Metrics</h5>
                                    <ul>
                                        <li>Fewer publishing-related support tickets</li>
                                        <li>Reduced time spent reviewing and validating rounds</li>
                                        <li>Decrease in post-publication corrections</li>
                                        <li>Improved admin confidence in completing publish actions</li>
                                        <li>Faster completion of full PTO bid packages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Design</h6>
                                <h2 className='purple'>3-Step Design Core Flow</h2>
                                <p>The design focused on increasing visibility, reducing cognitive load, and reinforcing intentional publishing behavior. Because publishing PTO awards is a high-stakes, employee-facing action, the experience needed to guide administrators clearly from review to confirmation without ambiguity.</p>
                                <p>The solution centered on surfacing system state, maintaining contextual awareness across bid rounds, and validating actions before final publish.</p>
                            </div>
                            <div className="process-body">
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 1: Identify the Correct Bid Round</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>Administrators begin by selecting a bid round from a chronologically sorted list. Unpublished rounds are visually marked, and the system automatically loads the oldest unpublished round when entering from the bid package. The selected round is clearly highlighted to prevent context confusion.</p>
                                        <div className="bullet-list-group">
                                            <p>This step ensures admins immediately understand</p>
                                            <ul>
                                                <li>Which rounds require action</li>
                                                <li>Which round they are currently reviewing</li>
                                                <li>Whether publishing is available</li>
                                            </ul>
                                        </div>
                                        <p>The goal is rapid orientation with zero ambiguity.</p>
                                        <div className='image-group'>
                                            <div className="image" role="img" aria-label="Take Batch Start">
                                                <img src={images.pubAwardsBidPackagePage} alt="Take Batch Start"></img>
                                                <div className="step-decision">
                                                    <span>Bid Package</span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="image" role="img" aria-label="Take Batch Start">
                                                <img src={images.pubAwardsBidRoundListPage} alt="Take Batch Start"></img>
                                                <div className="step-decision">
                                                    <span>Bid Round List</span> <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                </div>
                                            </div> 
                                            <div className="image" role="img" aria-label="Take Batch Start">
                                                <img src={images.pubAwardsBidRoundPage} alt="Take Batch Start"></img>
                                                <div className="step-decision">
                                                    <span>Bid Round</span>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 2: Review & Validate Awards</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>Within the selected round, administrators can search participants, toggle conflict visibility, and review awarded date ranges. Filters persist across actions, and contextual alerts appear if a search result does not apply to the selected round. Clear validation messaging confirms when conflicts do not exist and flags eligibility issues when they do.</p>
                                        <div className="bullet-list-group">
                                            <p>This step supports</p>
                                            <ul>
                                                <li>Accurate participant validation</li>
                                                <li>Conflict detection before publishing</li>
                                                <li>Reduced context-switching errors</li>
                                                <li>Faster review of large participant lists</li>
                                            </ul>
                                        </div>
                                        <p>The system shifts from reactive correction to proactive validation.</p>
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.pubAwardsPage} alt="Take Batch Start"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 3: Publish with Confirmation & Control</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>Once review is complete, administrators can select individual or all participants and proceed with publishing. The publish action is intentionally surfaced only when applicable, reinforcing that it is a finalizing step. Awarded date ranges remain visible prior to confirmation, ensuring clarity before completion.</p>
                                        <div className="bullet-list-group">
                                            <p>This step ensures</p>
                                            <ul>
                                                <li>Intentional publishing behavior</li>
                                                <li>Clear understanding of what is being finalized</li>
                                                <li>Reduced risk of accidental or incomplete publishing</li>
                                            </ul>
                                        </div>
                                        <div className="image" role="img" aria-label="Take Batch Start">
                                            <img src={images.pubAwardsPageWithMessage} alt="Take Batch Start"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Design Principles Applied</h4>
                                    </div>
                                    <div className="decision-body">
                                        <div className="bullet-list-group">
                                            <ul>
                                                <li>Status Visibility First - Make unpublished and conflict states immediately recognizable</li>
                                                <li>Context Preservation - Maintain search and filter awareness across rounds</li>
                                                <li>Error Prevention Over Correction - Validate eligibility and conflicts before publish</li>
                                                <li>Structured Hierarchy in Dense Data - Keep large datasets scannable and actionable</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Refine</h6>
                                <h2 className='purple'>Refine & Implement</h2>
                            </div>
                            <div className="process-body">
                                <div className="process-step-sub-section">
                                    <h6>Iterations</h6>
                                    <p>Early iterations revealed that while status indicators were present, they were not prominent enough to support quick scanning across 10+ rounds. Visual hierarchy was adjusted to better differentiate selected rounds, unpublished rounds, and published states. Highlighting, iconography, and spacing were refined to improve scannability without increasing visual noise.</p>
                                    <p>Search and filter behavior also required iteration. Initially, switching rounds after filtering created silent empty states. This was refined by introducing contextual alert messaging when search results did not apply to the newly selected round. Conflict toggles were similarly clarified with explicit confirmation states when no conflicts existed, eliminating ambiguity.</p>
                                    <p>Long round names and dense participant lists were tested and adjusted to prevent layout breaks and cognitive overload. Truncation behavior, spacing adjustments, and accordion-style expansion patterns were refined to maintain clarity while preserving data visibility.</p>
                                </div>
                                <hr></hr>
                                <div className="process-step-sub-section">
                                    <h6>UI Development</h6>
                                    <p>The final UI focused on structured hierarchy and intentional action design. Status indicators were standardized across bid rounds, ensuring consistency between configuration, review, and publish views. Buttons were conditionally displayed based on round state, reinforcing correct system behavior and preventing invalid actions.</p>
                                    <p>Visual feedback was aligned with functional states — unpublished rounds clearly marked, selected rounds highlighted, alerts consistently styled, and publish actions intentionally separated from validation controls. This consistency reduced decision fatigue and supported predictable interaction patterns across the workflow.</p>
                                    <p>Throughout development, emphasis was placed on preserving context. Search persistence, round highlighting, and validation messaging ensured administrators always understood where they were in the process and what actions remained.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section outcome-section'>
                    <div className='section-list outcome'>
                        <h2 className='purple'>Outcome & Impact</h2>
                        <div className="outcome-body">
                            <p>The redesigned Publish Awards experience transformed a high-risk administrative task into a structured, confidence-driven workflow. By making system state immediately visible and reinforcing validation before publishing, administrators could move through bid rounds with clarity and control.</p>
                            <p>Unpublished rounds are now easily identifiable, required actions are surfaced without extra navigation, and contextual alerts prevent eligibility or filtering errors from going unnoticed. Conflict visibility and persistent search behavior reduce cognitive load when managing large participant lists across multiple rounds.</p>
                            <div className="bullet-list-group">
                                <p>As a result, the workflow supports</p>
                                <ul>
                                    <li>Fewer publishing-related errors</li>
                                    <li>Reduced time spent reviewing and validating rounds</li>
                                    <li>Decreased need for post-publication corrections</li>
                                    <li>Improved administrative efficiency</li>
                                    <li>Increased confidence in finalizing PTO awards</li>
                                </ul>
                            </div>
                            <p>Most importantly, the experience shifts publishing from a moment of uncertainty to a deliberate, validated action — ensuring that employee-facing PTO awards are accurate the first time.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default PublishAwards;
