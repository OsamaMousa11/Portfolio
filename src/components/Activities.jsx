import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = ({ title, org, timeframe, bullets }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <div className="muted">{org} • {timeframe}</div>
      </div>
      <ul className="bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

ActivityItem.propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  timeframe: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Activities = ({ items }) => {
  return (
    <div className="experience-list">
      {items.map((a, idx) => (
        <ActivityItem key={idx} {...a} />
      ))}
    </div>
  );
};

Activities.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      org: PropTypes.string.isRequired,
      timeframe: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Activities; 