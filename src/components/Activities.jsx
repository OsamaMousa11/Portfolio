import React from 'react';
import PropTypes from 'prop-types';

const CodeforcesMark = () => (
  <svg
    className="activity-cf-icon"
    viewBox="0 0 24 24"
    width={26}
    height={26}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M22.47 9.84 16.31 4.26a1.28 1.28 0 0 0-1.79 0L12 6.65 9.48 4.26a1.28 1.28 0 0 0-1.79 0L1.53 9.84c-.53.48-.53 1.29 0 1.77l6.16 5.58a1.28 1.28 0 0 0 1.79 0L12 17.35l2.52 2.39a1.28 1.28 0 0 0 1.79 0l6.16-5.58c.53-.48.53-1.29 0-1.77Z"
    />
  </svg>
);

const ActivityItem = ({ title, org, timeframe, bullets, description, codeforcesIcon }) => {
  const meta = [org, timeframe].filter(Boolean).join(' • ');

  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="activity-title-row">
          {codeforcesIcon ? <CodeforcesMark /> : null}
          <span>{title}</span>
        </h3>
        {meta ? <div className="muted">{meta}</div> : null}
      </div>
      {description ? (
        <p className="activity-description">{description}</p>
      ) : (
        <ul className="bullets">
          {(bullets || []).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

ActivityItem.propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string,
  timeframe: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  codeforcesIcon: PropTypes.bool,
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
      org: PropTypes.string,
      timeframe: PropTypes.string,
      bullets: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      codeforcesIcon: PropTypes.bool,
    })
  ).isRequired,
};

export default Activities; 