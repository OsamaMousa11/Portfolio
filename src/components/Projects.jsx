import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  const listRef = useRef(null);
  const handleGlowMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty('--mx', `${x}px`);
    target.style.setProperty('--my', `${y}px`);
  };

  const handleGlowMouseLeave = (event) => {
    const target = event.currentTarget;
    target.style.setProperty('--mx', `-1000px`);
    target.style.setProperty('--my', `-1000px`);
  };

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const total = container.children.length;
    if (total === 0) return;

    let index = 0;
    let timerId;

    const scrollToIndex = (i) => {
      const target = container.children[i];
      if (target) {
        const containerWidth = container.clientWidth;
        const targetLeft = target.offsetLeft;
        const targetWidth = target.offsetWidth;
        const scrollLeft = targetLeft - (containerWidth - targetWidth) / 2;
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    };

    const start = () => {
      stop();
      timerId = setTimeout(() => {
        scrollToIndex(index);
        timerId = setInterval(() => {
          index = (index + 1) % total;
          scrollToIndex(index);
        }, 3000);
      }, 1000);
    };

    const stop = () => {
      if (timerId) {
        clearTimeout(timerId);
        clearInterval(timerId);
      }
    };

    const handleEnter = () => stop();
    const handleLeave = () => start();

    start();
    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      stop();
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [projects]);

  return (
    <div className="projects-grid" ref={listRef}>
      {projects.map((p, idx) => (
        <article
          className="project-card"
          key={idx}
          onMouseMove={handleGlowMouseMove}
          onMouseLeave={handleGlowMouseLeave}
        >
          <div className="project-top">
            <h3 className="project-title">{p.name}</h3>
            <div className="project-actions">
              {p.links?.github && (
                <a className="icon-btn" href={p.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/></svg>
                </a>
              )}
              {p.links?.live && (
                <a className="icon-btn" href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live" title="Live">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/></svg>
                </a>
              )}
            </div>
          </div>

          <p className="project-desc">{p.tagline}</p>

          <div className="chips" style={{ marginTop: '8px' }}>
            {p.stack.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>

          {p.highlights?.length ? (
            <ul className="bullets" style={{ marginTop: '8px' }}>
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string,
      stack: PropTypes.arrayOf(PropTypes.string).isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.shape({ github: PropTypes.string, live: PropTypes.string, docs: PropTypes.string }),
    })
  ).isRequired,
};

export default Projects; 