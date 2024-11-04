// App.js
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="resume-container">
      <Header />
      <div className="empty-binding-box"></div> {/* Empty binding box below Arthur Henry */}
      <div className="main-content">
        <div className="left-column">
          <Section title="Professional Summary" content={<Summary />} />
          <Section title="Experience" content={<Experience />} />
          <Section title="Projects" content={<Projects />} />
        </div>
        <div className="right-column">
          <ContactInfo />
          <Section title="Education" content={<Education />} />
          <Section title="Skills" content={<Skills />} />
        </div>
      </div>
    </div>
  );
}

const Header = () => (
  <header className="header">
    <p className="software-developer">Software Developer</p>
    <h1>
      <span className="name-arthur">Arthur</span> <span className="name-henry">Henry</span>
    </h1>
   </header>
);

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contact-item">
      <FontAwesomeIcon icon={faPhone} className="icon" /> 520-709-1298
    </div>
    <div className="contact-item">
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} /> 
        <a href="mailto:art_a_henry@yahoo.com" style={{ marginLeft: "8px", color: "inherit", textDecoration: "underline" }}>
         art_a_henry@yahoo.com
        </a>
      
    </div>
    <div className="contact-item">
      <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "5px" }} /> 
      <a href="https://admirable-bubblegum-573742.netlify.app" style={{ marginLeft: "8px", color: "inherit", textDecoration: "underline" }}>
        https://arthur-online-resume
      </a>
    </div>
  </div>
);

const Summary = () => (
  <div>
    <p>
      As a software developer, I offer a wide variety of experiences and challenges from project-to-project. I provide
      best business practices for the design, development, and execution of software solutions. Specialize in cloud infrastructure,
      full-stack development, and agile methodologies.
    </p>
  </div>
);

const Section = ({ title, content }) => (
  <section className="section">
    <hr className="section-hr" /> {/* Custom HR above each h2 */}
    <div className="title-box">
      <h2>{title}</h2>
    </div>
    <div className="section-content">{content}</div>
  </section>
);

const Experience = () => (
  <div>
    <h3>Software Developer - ELPHA, San Francisco, CA</h3>
    <p>August 2021 – Present</p>
    <ul>
      <li>Created YAML template files for AWS CloudFormation to manage infrastructure such as API Gateway, Lambda functions, DynamoDB tables, S3 buckets, Athena databases, and users.</li>
      <li>Collaborated with cross-functional teams to streamline cloud-based workflows and processes, optimizing efficiency.</li>
      <li>Supported management and maintenance of cloud infrastructure to ensure stability, scalability, and security.</li>
      <li>Managed policies, access controls, and security configurations in AWS and other cloud environments.</li>
    </ul>

    <h3>Full Stack Developer - Hewlett Packard, Phoenix, AZ</h3>
    <p>June 2017 – August 2021</p>
    <ul>
      <li>Designed and implemented web applications using both front-end and back-end technologies.</li>
      <li>Developed Single Page Applications (SPAs) with React for login pages, main pages, and integration setups.</li>
      <li>Created a customer resolution management tool using React and Java, improving customer support efficiency.</li>
      <li>Worked with payment teams to enhance user experience for over 50,000 customers, saving time and improving cash flow.</li>
    </ul>

    <h3>System Administrator - Sprint-Paranet, Chicago, IL</h3>
    <p>March 2013 – June 2017</p>
    <ul>
      <li>Oversaw and maintained IT infrastructure, ensuring systems were secure, reliable, and up-to-date.</li>
      <li>Configured, optimized, and automated server and network performance.</li>
      <li>Provided technical support, troubleshooting, and debugging for software systems.</li>
      <li>Collaborated with teams to develop business solutions to increase profits through agile methodologies.</li>
    </ul>
  </div>
);

const Projects = () => (
  <div>
    <h3>Project 1 - Cloud Automation Tool</h3>
    <p>Built an automated tool to streamline cloud deployment processes using AWS services, improving deployment efficiency by 30%.</p>

    <h3>Project 2 - Customer Resolution Management System</h3>
    <p>Developed a customer resolution management system using React and Java, improving customer support efficiency by 20%.</p>
  </div>
);

const Education = () => (
  <div>
    <h3>Keller Graduate School of Management</h3>
    <p>Master's in Computer Information Systems (June 2016 – August 2018)</p>
    <h3>DeVry University</h3>
    <p>Bachelor's in Computer Science (March 2011 – June 2015)</p>
  </div>
);

const Skills = () => (
  <div className="skills-section">
    <Skill title="JavaScript" proficiency={5} />
    <Skill title="Java" proficiency={4} />
    <Skill title="React" proficiency={4} />
    <Skill title="Kubernetes" proficiency={3} />
    <Skill title="NodeJS" proficiency={4} />
    <Skill title="Python" proficiency={3} />
    <Skill title="AWS" proficiency={5} />
    <Skill title="Docker" proficiency={4} />
    <Skill title="Git" proficiency={4} />
    <Skill title="Linux" proficiency={5} />
  </div>
);

const Skill = ({ title, proficiency }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`star ${index < proficiency ? 'filled' : ''}`}
      />
    ));

  return (
    <div className="skill-item">
      <span>{title}</span>
      <div className="stars">{stars}</div>
    </div>
  );
};

export default App;
