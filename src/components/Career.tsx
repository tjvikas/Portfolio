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

          {/* Rapid Circle - Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer</h4>
                <h5>Rapid Circle</h5>
              </div>
              <h3>March 2026 - Present</h3>
            </div>
            <p>
              Working on cloud-based solutions and enterprise infrastructure,
              focusing on Microsoft Azure services, automation, and modern
              workplace technologies. Contributing to scalable and secure
              deployments while improving operational efficiency.
            </p>
          </div>

          {/* TCS Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services (TCS)</h5>
              </div>
              <h3>2022 - March, 2026</h3>
            </div>
            <p>
              Managed Windows server environments across production and
              non-production systems, ensuring high availability of 100+
              servers. Resolved and coordinated 200+ incidents and changes per
              quarter, and automated patching and maintenance tasks using
              PowerShell and Azure DevOps.
            </p>
          </div>

          {/* Certifications */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Professional Development</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              AWS SysOps Administrator, Azure Fundamentals (AZ-900), Azure
              Administrator (AZ-104), SC-300, Google Cloud Engineer, and Gen AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
