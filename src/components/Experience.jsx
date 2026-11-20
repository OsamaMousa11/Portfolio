import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ role, company, timeframe, location, bullets, link, linkLabel }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h3>{role}</h3>
            <div className="muted">{company} • {timeframe} • {location}</div>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="btn-link"
              style={{ fontSize: '0.85rem', padding: '0.25rem 0.65rem' }}
            >
              <span>{linkLabel || 'View App'}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
              </svg>
            </a>
          )}
        </div>
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
  link: PropTypes.string,
  linkLabel: PropTypes.string,
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
    link: PropTypes.string,
    linkLabel: PropTypes.string,
  })).isRequired,
};

export default Experience; 