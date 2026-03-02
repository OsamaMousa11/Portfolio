import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ theme, toggleTheme, activeSection, sections, links }) => {
  const [open, setOpen] = useState(false);

  const whatsappHref = useMemo(() => {
    if (!links?.whatsapp) return null;
    return links.whatsapp.includes('wa.me')
      ? links.whatsapp
      : `https://wa.me/${(links.whatsapp || '').match(/\d+/g)?.join('') || ''}`;
  }, [links]);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Toggle (visible on small screens) */}
      <button
        className="sidebar-toggle icon-btn"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29 10.59 10.6l6.3-6.3z"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
        )}
      </button>

      {/* Backdrop */}
      <div className={`sidebar-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />

      {/* Panel */}
      <aside className={`sidebar-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29 10.59 10.6l6.3-6.3z"/></svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`sidebar-link ${activeSection === id ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-6a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 1 1-2 0 1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm11.66-6.66a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM6.22 17.78a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42zM17.78 17.78a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42zM6.22 6.22a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 6.93 8.34l-.71-.71a1 1 0 0 1 0-1.41z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.742 13.045A8 8 0 1 1 10.955 3.258a7 7 0 1 0 9.787 9.787z"/></svg>
            )}
          </button>

          {links?.github && (
            <a className="icon-btn" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/></svg>
            </a>
          )}
          {links?.linkedin && (
            <a className="icon-btn" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-3.8V8.5z"/></svg>
            </a>
          )}
          {whatsappHref && (
            <a className="icon-btn" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3.5A10.5 10.5 0 0 0 3.84 18.81L3 22l3.28-.86A10.5 10.5 0 1 0 20 3.5zm-8.28 3h.02c.33 0 .68.01 1 .07.29.05.68.22.78.54.2.6.61 2.06.66 2.21.11.25.02.56-.19.73-.3.24-.59.51-.85.82-.28.33-.06.6.11.86.4.6.87 1.15 1.44 1.61.56.45 1.26.88 1.98 1.07.2.05.46.04.62-.12.31-.32.66-.69.98-1.02.17-.18.4-.25.64-.17.34.11 2.11.98 2.15 1 .33.15.55.24.64.38.07.12.07.68-.16 1.33-.19.53-.91 1.02-1.49 1.06-.4.03-.8.03-1.2-.03-2.45-.36-4.51-1.56-6.08-3.53-1.19-1.46-2.05-3.17-2.33-5.03-.08-.53-.13-1.08-.06-1.62.09-.72.53-1.32 1.23-1.43.24-.04.49-.07.74-.06z"/></svg>
            </a>
          )}
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleTheme: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })).isRequired,
  links: PropTypes.shape({ github: PropTypes.string, linkedin: PropTypes.string, whatsapp: PropTypes.string }).isRequired,
};

export default Sidebar; 