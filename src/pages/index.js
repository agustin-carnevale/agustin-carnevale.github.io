import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import EducationSection from '../components/sections/EducationSection'
import SkillsSection from '../components/sections/SkillsSection'
import InterestsSection from '../components/sections/InterestsSection'
import TrainingsSection from '../components/sections/TrainingsSections'
import LanguagesSection from '../components/sections/LanguagesSection'

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <AboutSection />
      <hr className="m-0" />
      <SkillsSection />
      <hr className="m-0" />
      <ExperienceSection />
      <hr className="m-0" />
      <EducationSection />
      <hr className="m-0" />
      <TrainingsSection />
      <hr className="m-0" />
      <InterestsSection />
      <hr className="m-0" />
      <LanguagesSection />
    </div>
  </Layout>
);

export default IndexPage;
