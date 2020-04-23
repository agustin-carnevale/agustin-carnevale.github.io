import React from 'react';
import config from '../../../config';

const AboutSection = ()=>(
    <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
    >
        <div className="w-100">
            <h1 className="mb-0 my-name">
                {config.firstName}
                <span className="text-primary">{config.lastName}</span>
            </h1>
            <div className="subheading mb-5">
                {config.address} ·
                <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <p className="lead mb-5">
                Agustin Carnevale is a computer science passionate with an enterprising mind, currently focused on JavaScript technologies. He has 4+ years of solid experience in software engineering and IT related areas. He has been involved in the design, development and testing of websites as well as stand-alone applications in multiple legacy and current programming languages.
                He has a strong formal education base, on which he continues expanding his knowledge and learning new technologies and techniques.
            </p>
            <div className="social-icons">
                {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                    <a key={url} href={url} target="_blank">
                    <i className={`fab ${icon}`}></i>
                    </a>
                );
                })}
            </div>
        </div>
    </section>
)

export default AboutSection