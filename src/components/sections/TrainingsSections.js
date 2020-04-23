import React from 'react';

const TrainingsSection = ()=>(
<section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="trainings"
  >
    <div className="w-100">
      <h2 className="mb-5">Trainings</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Course: “Docker and Kubernetes: The Complete Guide” (22 hours)</h3>
          <p>
            Description:<br/>
            Build, test, and deploy Docker applications with Kubernetes while using production-style development workflows.
            Github, Travis-CI, AWS Elastic Beanstalk, and Docker Hub as deployment pipeline. Integration of AWS ElastiCache for Redis and AWS Relational Database Service (RDS) for Postgres.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Nov. 2018 - Dec. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Course: “AWS Serverless API's and Apps” (10 hours)</h3>
          <p>
            Description:<br/>
            Serverless computing with API Gateway, Lambda functions and DynamoDB. Cognito for users pool and authentication. Static SPA hosting with S3. CloudFront for content delivery optimization.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Nov. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Course: “Server Side Rendering with React and Redux” (10 hours)</h3>
          <p>
            Description:<br/>
            Architectural considerations. Webpack-powered app. Secure data loading and state rehydration techniques. Routing with react-router and express. Error handling and authentication.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Oct. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Course: “Node JS: Advanced Concepts” (20 hours)</h3>
          <p>
            Description:<br/>
            Caching data with Redis, speed up through clustering. Testing with Jest and Puppeteer. Image upload using AWS S3 service for storage. Integration of Travis for CI.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Sep. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Course: “Node with React: Fullstack Web Development” (25 hours)</h3>
          <p>
            Description:<br/>
            Built from scratch and deployed a complete web app with NodeJS, Express, MongoDB, React, Redux, Redux-Form, Router.
            Including authentication with Google OAuth, billing/payments with Stripe, and email handling with SendGrid. Heroku for deployment. 
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Jul. 2018 – Aug. 2018</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">Course: “Complete Web Development with HTML5, CSS3,JS, jQuery, Ajax, PHP and MySQL” (50 hours)</h3>
          <p>
            Description:<br/>
            Full website creation integrating AdminLTE, PayPal, GoogleMaps, etc.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Nov. 2017 – Feb. 2018</span>
        </div>
      </div>
    </div>
  </section>
)

export default TrainingsSection