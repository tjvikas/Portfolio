import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services (TCS)</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Managed Windows server environments across production and non-production systems, ensuring high availability of over 100 servers. Resolved and coordinated 200+ incidents and changes per quarter, and automated patching and routine maintenance using PowerShell and Azure DevOps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Professional Development</h5>
              </div>
              <h3>Active</h3>
            </div>
            <p>
              AWS SysOps Administrator, Gen AI, AZ-900, AZ-104, SC-300, Google Cloud Engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
