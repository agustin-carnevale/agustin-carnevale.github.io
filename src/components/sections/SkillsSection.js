import React from 'react';

const SkillsSection = () => (
<section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>

      <div className="subheading mb-3">
        Programming Languages &amp; Tools
      </div>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item">
          <i className="fab fa-html5"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-css3-alt"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-js-square"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-react"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-node-js"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-npm"></i>
        </li>
      </ul>

      <div className="subheading mb-3">Knowledge and main focus on:</div>
      <ul className="fa-ul mb-0">
        <li>
          <i className="fa-li fa fa-check"></i>
          JavaScript (ES6/+)
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          HTML5 - CSS3/4, Styled-Components
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Gatsby (React framework), JAMStack
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          React, Redux, Router, Redux-Form
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Node, Express
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          GraphQL
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Postgresql
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          JS Testing, Jest, Puppeteer
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Server Side Rendering
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Serverless API’s, Apps with AWS
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Docker and Kubernetes
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Git
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          CI (Continuous Integration)
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Amazon Web Services
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Tools: Jira, ActiveCollab / Slack / InVision / Keybase / Lokalise
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Agile Methodologies, Scrum, Kanban
        </li>
      </ul>
    </div>
  </section>
)

export default SkillsSection