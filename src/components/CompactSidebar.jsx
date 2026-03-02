import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

function CompactSidebar({ visible, activeSection, sections }) {
  const { prev, current, next } = useMemo(() => {
    const idx = sections.findIndex(s => s.id === activeSection);
    return {
      prev: idx > 0 ? sections[idx - 1] : null,
      current: idx >= 0 ? sections[idx] : null,
      next: idx >= 0 && idx < sections.length - 1 ? sections[idx + 1] : null,
    };
  }, [sections, activeSection]);

  return (
    <aside className={`compact-sidebar right-side ${visible ? 'visible' : ''}`} aria-hidden={!visible}>
      <nav className="compact-sidebar-nav" aria-label="Section navigation">
        {prev && (
          <a href={`#${prev.id}`} className="compact-sidebar-link neighbor blur">
            {prev.label}
          </a>
        )}
        {current && (
          <a href={`#${current.id}`} className="compact-sidebar-link active">
            {current.label}
          </a>
        )}
        {next && (
          <a href={`#${next.id}`} className="compact-sidebar-link neighbor blur">
            {next.label}
          </a>
        )}
      </nav>
    </aside>
  );
}

CompactSidebar.propTypes = {
  visible: PropTypes.bool,
  activeSection: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
};

CompactSidebar.defaultProps = {
  visible: false,
  activeSection: undefined,
};

export default CompactSidebar; 