import React from 'react';

const EducationSection = ()=>(
    <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
    >
        <div className="w-100">
        <h2 className="mb-5">College Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
            <h3 className="mb-0">UBA - FCEN (Universidad de Buenos Aires)</h3>
            <div className="subheading mb-3">BS in Computer Science</div>
            <div>Computer Science - approved till 3rd year</div>
            <p>Average: 9.50 (out of 10)</p>
            </div>
            <div className="resume-date text-md-right">
            <span className="text-primary">Aug. 2008 – Aug. 2010</span>
            </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
            <h3 className="mb-0">ITBA (Instituto Tecnológico de Buenos Aires)</h3>
            <div className="subheading mb-3">Informatics Engineering</div>
            <div>Informatics Engineering - 1 third of the carrer completed</div>
            <p>Average: 7.50 (out of 10)</p>
            </div>
            <div className="resume-date text-md-right">
            <span className="text-primary">Mar. 2006 – Mar. 2008</span>
            </div>
        </div>
        </div>
  </section>
)

export default EducationSection