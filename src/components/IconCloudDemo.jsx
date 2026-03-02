import React from 'react';
import PropTypes from 'prop-types';
import { Cloud } from 'react-icon-cloud';

const IconCloudDemo = ({ slugs, theme = 'dark' }) => {
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 680px)').matches;
  const size = isMobile ? 40 : 28;
  const hoverFilter = theme === 'light'
    ? 'brightness(1.05) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25))'
    : 'brightness(1.1) drop-shadow(0 2px 10px rgba(255, 255, 255, 0.15))';

  return (
    <div className="icon-cloud-wrap">
      <Cloud
        options={{
          imageScale: 2,
          pinchZoom: true,
          dragControl: true,
          tooltip: 'native',
          maxSpeed: 0.08,
          minSpeed: 0.02,
          freezeActive: false,
          wheelZoom: false,
          radiusX: 0.5,
          radiusY: 0.5,
          radiusZ: 0.5,
          zoom: isMobile ? 1.5 : 1.1,
          mouseInteraction: true,
          mouseSpeed: 0.1,
          mouseRadius: 150,
          mouseForce: 1.2,
          autoRotate: true,
          autoRotateSpeed: 0.5,
        }}
      >
        {slugs.map((slug) => (
          <a
            key={slug}
            href={`https://simpleicons.org/?q=${slug}`}
            target="_blank"
            rel="noreferrer"
            title={slug}
            style={{ 
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.4) rotateY(15deg)';
              e.currentTarget.style.zIndex = '10';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <img
              height={size}
              width={size}
              alt={slug}
              src={`https://cdn.simpleicons.org/${slug}`}
              style={{
                filter: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.target.style.filter = hoverFilter;
                e.target.style.transform = 'rotateX(10deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = 'none';
                e.target.style.transform = 'rotateX(0deg)';
              }}
            />
          </a>
        ))}
      </Cloud>
    </div>
  );
};

IconCloudDemo.propTypes = {
  slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default IconCloudDemo;
