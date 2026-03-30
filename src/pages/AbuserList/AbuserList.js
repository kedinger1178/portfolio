import images from '../../images/imageIndex.js';

import '../../styles/caseStudy.scss';
import './abuserList.scss';


function AbuserList() {
    return (
        <div className='page page-abuser'>
            <header className='case-study-hero abuser-list-hero'>
                <div className="case-study">
                    <div className='hero-text'>
                        <h1 className='no-image-title'>Abuser List</h1>
                        <p>An internal tool to identify, track, and prevent repeated ACH/Credit Card payment abuse by flagging high-risk accounts and streamlining investigation workflows.</p>
                    </div>
                    <div className="hero-image" role="img" aria-label="Abuser List Hero">
                        <img src={images.abuserListHero} alt="Abuser List Hero"></img>
                    </div>
                </div>
            </header>
            <div className='body'>
                <section className='section overview-section'>
                    <div className='section-list overview'>
                        <div className="main-text">
                            <div className="text-block">
                                <h3 className='teal'>Overview</h3>
                                <p>A net-new workflow to support accounting operations users by centralizing a way to review suspicious accounts, recognize repeat offenders, and take action quickly.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='teal'>Problem</h3>
                                <p>The accounting operations teams lacked a centralized way to quickly identify and investigate repeat ACH/Credit Card abuse, leading to slow and inefficient manual reviews.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='teal'>Opportunity</h3>
                                <p>Create a streamlined queue that surfaces high-risk accounts and key abuse patterns to reduce investigation time and improve decision-making.</p>
                            </div>
                            <div className="text-block">
                                <h3 className='teal'>Solution</h3>
                                <p>Designed a new workflow that organizes flagged accounts into a scannable, data-driven interface with clear prioritization and actionable investigation views.</p>
                            </div>
                        </div>
                        <div className="secondary-text">
                            <div className="text-block">
                                <h5 className='teal'>Platform</h5>
                                <p>Web - Internal accounting operations tool</p>
                            </div>
                            <div className="text-block">
                                <h5 className='teal'>Project type</h5>
                                <p>Net-new Workflow</p>
                            </div>
                            <div className="text-block">
                                <h5 className='teal'>Tools used</h5>
                                <p>Figma</p>
                            </div>
                            <div className="text-block">
                                <h5 className='teal'>My role</h5>
                                <p>UI/UX Designer</p>
                            </div>
                            <div className="text-block">
                                <h5 className='teal'>Team</h5>
                                <p>Product manager, Accounting Team, Engineers</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section design-process-section abuser-design-process-section'>
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
                                <h2 className='teal'>What challenges are the users experiencing?</h2>
                            </div>
                            <div className="process-body">
                                <p>In the initial research phase, we conducted in-depth interviews with operations and compliance teams to understand how they currently identify and manage ACH/Credit Card abusers. We also reviewed internal transaction data and existing workflows to uncover bottlenecks, inefficiencies, and risk points. This research revealed that users struggled with fragmented information, unclear account statuses, and time-consuming manual checks, leading to delayed responses and increased risk exposure for the business.</p>
                                <p>From these findings, we identified clear opportunities to improve the system: consolidating account data into a single, actionable view, providing contextual insights for faster decision-making, and introducing automated alerts for high-risk behaviors. These insights were mapped directly to business goals—reducing financial risk, improving operational efficiency, and ensuring compliance—and informed the prioritization of features that would deliver the most value for both users and the organization.</p>
                                <p>To measure success, we established metrics that reflected both user and business outcomes. Task completion rates, time to resolve flagged accounts, and accuracy of risk identification became key indicators of usability and efficiency. User satisfaction and confidence in the system were also tracked through feedback and usability testing, ensuring that the redesigned Abuser List not only mitigated risk but also empowered users to act quickly and confidently.</p>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Design</h6>
                                <h2 className='teal'>3-Step User Flow Design</h2>
                                <p>The design focused on tackling the challenges of identifying and managing ACH/Credit Card abuse, I developed a streamlined 3-step user flow that guides users from detection to resolution. This flow was designed to balance efficiency, clarity, and accuracy, ensuring that users can quickly take action on flagged accounts while maintaining confidence in the system. Each step builds on the previous one, aligning business goals, user needs, and success metrics into a cohesive experience.</p>
                            </div>
                            <div className="process-body">
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 1: Select & Compare</h4>
                                    </div>
                                    <div className="decision-body">
                                        <div className='step-breakdown'>
                                            <p>Administrators start by selecting a specific date range, which filters, displays and shows similarities of all new client companies to the current data on the Master Abuser List. This step ensures that only relevant data is reviewed, helping administrators quickly identify potential high-risk accounts and take appropriate actions based on the most recent activity.</p>
                                            <div className="image" role="img" aria-label="Start Comparison">
                                                <img src={images.masterList} alt="Start Comparison"></img>
                                                <div className="step-decision">
                                                    <span>Master Abuser List</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="process-step-sub-section">
                                            <h6>Comparison Options</h6>
                                            <p>Administrators can choose how to compare new clients against the Master Abuser List. By default, the system filters by a selected date range, showing all new companies added within that period. Alternatively, administrators can search by an individual person's name or a specific company, allowing for targeted checks when investigating potential risks. This flexibility ensures that both broad and focused reviews can be conducted efficiently, depending on the administrator’s needs.</p>
                                            <div className='image-group-2'>
                                                <div className="image" role="img" aria-label="Choose Comparison option">
                                                    <img src={images.comparisonModal} alt="Choose Comparison option"></img>
                                                    <div className="step-decision">
                                                        <span>Choose comparison option; Date range is default</span> 
                                                    </div>
                                                </div>  
                                                <div className="image" role="img" aria-label="Choose Comparison option">
                                                    <img src={images.comparisonModalIndividual} alt="Choose Comparison option"></img>
                                                    <div className="step-decision">
                                                        <span>Choose comparison option; Individual</span> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="process-step-sub-section">
                                            <h6>Similarity Insights</h6> 
                                            <p>Once the comparison is made, the New Company List displays each client's similarity to entries on the Master Abuser List as a percentage. Higher percentages indicate a closer match, helping administrators quickly prioritize which clients require further review. This visual scoring system streamlines decision-making by highlighting potential matches and reducing the time spent manually cross-referencing records.</p> 
                                            <div className="image" role="img" aria-label="Look at new client company list similarities">
                                                <img src={images.newCompanies} alt="Look at new client list"></img>
                                                <div className="step-decision">
                                                    <span>Display new client company list similarities</span>
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 2: Research & Review</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>After generating the New Company List, administrators review and validate each client's information before taking further action. The system displays a percentage match for each client against multiple companies or known abusers on the Master Abuser List, giving a clear indication of potential risk. Administrators can drill down into each company or individual’s details, examining key information such as account history, contact data, and prior incidents. Once a client has been thoroughly reviewed, administrators can confidently add verified entries to the Master Abuser List, ensuring that the list remains up-to-date and accurate. This step not only reduces the risk of false positives but also empowers administrators to make data-driven decisions efficiently.</p>
                                        <div className='image-group-2'>
                                            <div className="image" role="img" aria-label="Comparison List">
                                                <img src={images.comparisonList} alt="Comparison List"></img>
                                                <div className="step-decision">
                                                    <span>Comparison List</span>
                                                </div> 
                                            </div>
                                             <div className="image" role="img" aria-label="Abuser Details">
                                                <img src={images.abuserDetails} alt="Abuser Details"></img>
                                                <div className="step-decision">
                                                    <span>Abuser Details</span>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="decision">
                                    <div className="decision-header">
                                        <h4>Step 3: Confirm & Take Action</h4>
                                    </div>
                                    <div className="decision-body">
                                        <p>After reviewing and validating client information, administrators confirm their selections and take appropriate actions based on the data. This includes updating the Master Abuser List, flagging high-risk accounts, and triggering any necessary follow-up processes. The system provides visual confirmations, percentage match indicators, and audit trails, ensuring that all changes are accurately tracked and recorded.</p>
                                        <div className="process-step-sub-section">
                                            <h6>Flexible Additions throughout the Workflow</h6>
                                            <p>At any point during the comparison and review process, administrators can add a new client directly to the Master Abuser List. This flexibility reduces unnecessary clicks and streamlines the workflow, enabling immediate action when potential risks are identified. By allowing entries to be added at multiple stages, the system empowers administrators to maintain a current and reliable list while minimizing friction and making decision-making faster and more efficient.</p>                                        
                                            <div className='image-group-2'>
                                                <div className="image" role="img" aria-label="Master List Page Add to Master">
                                                    <img src={images.masterListAdd} alt="Master List Page Add to Master"></img>
                                                    <div className="step-decision">
                                                        <span>Master List page</span> 
                                                    </div>
                                                </div>  
                                                <div className="image" role="img" aria-label="Comparison List Page Add to Master">
                                                    <img src={images.comparisonListAdd} alt="Comparison List Page Add to Master"></img>
                                                    <div className="step-decision">
                                                        <span>Comparison List page</span> 
                                                    </div>
                                                </div> 
                                                <div className="image" role="img" aria-label="New Companies Page Add to Master Individually">
                                                    <img src={images.newCompaniesAddIndividually} alt="New Companies Page Add to Master Individually"></img>
                                                    <div className="step-decision">
                                                        <span>New Companies List page - individually</span> 
                                                    </div>
                                                </div> 
                                                <div className="image" role="img" aria-label="New Companies Page Add to Master in bulk">
                                                    <img src={images.newCompaniesAddBulk} alt="New Companies Page Add to Master in bulk"></img>
                                                    <div className="step-decision">
                                                        <span>New Companies List page - bulk</span> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-step-section">
                            <div className="process-header">
                                <h6>Refine</h6>
                                <h2 className='teal'>Refine & Implement</h2>
                            </div>
                            <div className="process-body">
                                <p>After validating the core workflow through research and early design exploration, the Abuser List moved into the refinement and implementation phase. This stage focused on improving usability, reducing friction in the review process, and ensuring administrators could confidently identify high-risk clients while maintaining accuracy. Design decisions were continuously refined based on stakeholder feedback, usability considerations, and technical feasibility to ensure the final solution supported both efficiency and compliance.</p>
                                <div className="process-step-sub-section">
                                    <h6>Iterations</h6>
                                    <p>Throughout the refinement process, multiple iterations were made to improve clarity, speed, and decision-making within the comparison workflow. Early versions of the experience surfaced too much information at once, which created cognitive overload and slowed down the review process. The design was adjusted to prioritize the most critical data first—such as match percentage, company name, and key identifiers—while still allowing users to drill into detailed records when needed.</p>
                                    <p>Another key iteration was enabling administrators to add a new client to the Master Abuser List at any point in the workflow. Instead of forcing users to complete the entire review process before taking action, the updated design reduced clicks and supported faster decision-making. This flexibility aligned with real-world admin behavior, where high-confidence matches often require immediate action without additional navigation.</p>
                                </div>
                                <hr></hr>
                                <div className="process-step-sub-section">
                                    <h6>UI Development</h6>
                                    <p>Once the refined design was approved, the UI was prepared for development with a focus on consistency, accessibility, and scalability. Components such as comparison tables, match percentage indicators, and detail views were designed to follow a consistent layout pattern so administrators could move through the experience quickly without re-learning interactions. Visual hierarchy was carefully applied to ensure high-risk matches stood out while still keeping the interface clean and easy to scan.</p>
                                    <p>To support long-term maintainability, the interface was built using reusable UI components and standardized spacing, typography, and interaction behaviors. Clear states were included for loading, empty results, and error handling to ensure the workflow remained reliable across different data scenarios. The final UI supported efficient review, reduced manual validation effort, and delivered a streamlined experience that could scale as the Master Abuser List continued to grow.</p>      
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section outcome-section'>
                    <div className='section-list outcome'>
                        <h2 className='teal'>Outcome & Impact</h2>
                        <div className="outcome-body">
                            <p>The Abuser List solution delivered a streamlined and scalable workflow for identifying and managing high-risk client companies. By introducing automated comparison capabilities and similarity match percentages, administrators could quickly prioritize which new clients required immediate attention. This reduced the time spent manually cross-referencing records and improved the overall speed and accuracy of the validation process.</p>
                            <p>From a business perspective, the tool strengthened fraud prevention and compliance efforts by creating a more consistent and repeatable method for flagging and managing abuser-related data. The ability to add new clients to the Master Abuser List at any point in the workflow reduced friction, minimized unnecessary clicks, and enabled faster decision-making when a strong match was identified.</p>
                            <div className="bullet-list-group">
                                <p>As a result, the workflow supports</p>
                                <ul>
                                    <li>Faster fraud identification through automated comparison and match scoring</li>
                                    <li>Improved prioritization by highlighting high-percentage similarity matches</li>
                                    <li>Reduced manual effort by eliminating time-consuming cross-checking</li>
                                    <li>More efficient admin actions with the ability to add clients at any step</li>
                                    <li>Increased accuracy and confidence through detailed drill-down validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default AbuserList;