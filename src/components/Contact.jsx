import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const { phone, displayPhone, email, location } = contact;

  const phoneDigits = (phone || '').match(/\d+/g)?.join('') || '';
  const whatsappUrl = phone && phone.includes('wa.me') ? phone : `https://wa.me/${phoneDigits}`;

  return (
    <div className="contact-grid">
      {/* WhatsApp */}
      <div className="contact-item">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="btn-icon" aria-hidden="true">
            <img src="/whatsapp.png" alt="WhatsApp" style={{ width: 22, height: 22, display: 'block' }} />
          </span>
          <div>
            <h3 style={{ margin: 0 }}>WhatsApp me</h3>
            <div className="muted" style={{ marginTop: 4 }}>{displayPhone || phone}</div>
          </div>
        </div>
        <div className="project-links">
          <a className="btn-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="btn-icon" aria-hidden="true">
              <img src="/whatsapp.png" alt="WhatsApp" style={{ width: 16, height: 16, display: 'block' }} />
            </span>
            Open WhatsApp
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="contact-item">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="btn-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </span>
          <div>
            <h3 style={{ margin: 0 }}>Email me</h3>
            <div className="muted" style={{ marginTop: 4 }}>{email.replace('mailto:', '')}</div>
          </div>
        </div>
        <div className="project-links">
          <a className="btn-link" href={`mailto:${email.replace('mailto:', '')}`}>
            <span className="btn-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2zM2 8.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.3l-9.45 5.9a2 2 0 0 1-2.1 0L2 8.3z"/></svg>
            </span>
            Write an email
          </a>
        </div>
      </div>

      {/* Location */}
      {location && (
        <div className="contact-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="btn-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </span>
            <div>
              <h3 style={{ margin: 0 }}>Location</h3>
              <div className="muted" style={{ marginTop: 4 }}>{location}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    displayPhone: PropTypes.string,
    email: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
};

export default Contact; 