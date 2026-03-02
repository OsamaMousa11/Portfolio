import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ role, company, timeframe, location, bullets }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{role}</h3>
        <div className="muted">{company} • {timeframe} • {location}</div>
      </div>
      <ul className="bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Experience = ({ experiences }) => {
  return (
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <ExperienceItem key={idx} {...exp} />
      ))}
    </div>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    timeframe: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default Experience; 