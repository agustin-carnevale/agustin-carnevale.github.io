import React from 'react';

const ExperienceSection = ()=>(
    <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Senior Web Developer (remote position, full-time)</h3>
          <div className="subheading mb-3">Sellry Inc. ,Colorado, USA.</div>
          <p>
            ● E-commerce sites/apps development. Cutting edge technologies. High performance
            headless websites.<br/>
            ● Technologies: Gatsby, React (Context, Hooks), Emotion (styled-components),
            GraphQL, Shopify. (JAMStack)
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Oct. 2019 – Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Software Engineer (remote position, full-time)</h3>
          <div className="subheading mb-3">KYND Ltd. ,London, UK.</div>
          <p>
            ● FullStack JavaScript Engineer: React, Redux, Router, Node/Express, Postgresql.<br/>
            ● Development of App and API as products for the cybersecurity industry.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Oct. 2018 – May. 2019</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Junior Advanced Web UI Developer</h3>
          <div className="subheading mb-3">Globant ,Buenos Aires, Argentina</div>
          <p>
            ● Front-end technologies including: React, React-Redux, HTML5, CSS3/4.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Apr. 2018 – Sep 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Web developer/designer</h3>
          <div className="subheading mb-3">Freelancer</div>
          <p>
            ● Working with clients from Fiverr and other platforms.<br/>
            ● Setting up of online stores on Shopify.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Mar. 2017 – May. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Junior Developer</h3>
          <div className="subheading mb-3">Metrogames S.A. ,Buenos Aires, Argentina</div>
          <p>
            ● He was part of a team that developed games for Facebook.<br/>
            ● Main language he worked with: ActionScript. 
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Sep. 2010 – Feb. 2011</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">Intern</h3>
          <div className="subheading mb-3">Conexia S.A. ,Buenos Aires, Argentina</div>
          <p>
            ● He helped in the maintenance of web applications related to the Health System in Argentina (HealthCare Insurance, ART, etc..).<br/>
            ● Languages he worked with: Java and PostgreSQL as database engine.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Oct. 2008 – Mar. 2009</span>
        </div>
      </div>
    </div>
  </section>

)

export default ExperienceSection