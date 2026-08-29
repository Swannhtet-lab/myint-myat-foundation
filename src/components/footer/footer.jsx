import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-inner-container">
        {/* Header */}
        <div className="footer-header">
          <h2>Myint Myat Foundation</h2>
          <div className="footer-underline" />
        </div>

        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-flex">
              <div className="footer-logo-circle">
                <img src={logoImg} alt="Myint Myat Foundation logo" />
              </div>
              <div>
                <div className="brand-name-main">Myint Myat Foundation</div>
                <div className="brand-name-sub">Empowering Communities</div>
              </div>
            </div>
            <p className="footer-tagline">Working to improve education, health, and livelihoods across Myanmar.</p>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contact Us</h3>
            <div className="contact-list">
              <div className="contact-row">
                <span className="icon-box"><MapPin size={18} /></span>
                <span className="contact-text-sentence">
                  <span className="contact-label">Address - </span>
                  <span className="contact-value">Yangon, Myanmar</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="icon-box"><Phone size={18} /></span>
                <span className="contact-text-sentence">
                  <span className="contact-label">Phone - </span>
                  <span className="contact-value">+95 9 xxx xxx xxx</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="icon-box"><Mail size={18} /></span>
                <span className="contact-text-sentence">
                  <span className="contact-label">Email - </span>
                  <span className="contact-value">info@myintmyatfoundation.org</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-text-sentence">
                  <span className="contact-label">Facebook - </span>
                  <span className="contact-value">Myint Myat Foundation</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <span>© {year} Myint Myat Foundation. All rights reserved.</span>
          <span className="footer-mission">Our mission: Empowering education for a brighter future.</span>
          <a href="https://myintmyatfoundation.org" target="_blank" rel="noopener noreferrer" className="footer-link">Visit our site</a>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
