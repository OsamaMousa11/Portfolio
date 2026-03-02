import React from 'react';

const Hero = ({ name, title, tagline, links }) => {
  const whatsappHref = links?.whatsapp && (links.whatsapp.includes('wa.me')
    ? links.whatsapp
    : `https://wa.me/${(links.whatsapp || '').match(/\d+/g)?.join('') || ''}`);

  return (
    <div className="hero">
      <div className="hero-photo-wrap">
        <img src="/me.png" alt={name} className="hero-photo" />
      </div>
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        {tagline && (
          <p className="hero-tagline centered-quote">
            <strong className="quote-strong">{tagline.split(',')[0]}</strong>,{` `}
            <span className="quote-rest">{tagline.split(',').slice(1).join(',').trim()}</span>
          </p>
        )}

        {(links?.github || links?.linkedin || links?.email || whatsappHref) && (
          <div className="hero-social">
            {links.github && (
              <a className="icon-btn brand-github" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
            )}
            {links.linkedin && (
              <a className="icon-btn brand-linkedin" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-3.8V8.5z" />
                </svg>
              </a>
            )}
            {links.email && (
              <a className="icon-btn brand-email" href={links.email} aria-label="Email" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 3L12 12.25 5.4 7h13.2zM4 18V8.5l8 6.25 8-6.25V18H4z"/>
                </svg>
              </a>
            )}
            {whatsappHref && (
              <a className="icon-btn icon-square" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <img src="/whatsapp.png" alt="WhatsApp" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero; 