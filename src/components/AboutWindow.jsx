import React from 'react';
import PropTypes from 'prop-types';

const AboutWindow = ({ name, title, summary }) => {
  return (
    <div className="mac-window">
      <div className="window-header">
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="dot dot-red" />
      </div>
      <div className="window-content">
        <pre className="code-block">
          <span className="comment">// About Me</span>{'\n'}
          <span className="keyword">const</span> <span className="variable">name</span> <span className="operator">=</span> <span className="string">"{name}"</span>;{'\n'}
          <span className="keyword">const</span> <span className="variable">role</span> <span className="operator">=</span> <span className="string">"{title}"</span>;{'\n\n'}
          <span className="comment">/* Summary */</span>{'\n'}
          <span className="text">{summary}</span>
        </pre>
      </div>
    </div>
  );
};

AboutWindow.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default AboutWindow; 