import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt5__footer section__padding">
    <div className="gpt5__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt5__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt5__footer-links">
      <div className="gpt5__footer-links_logo">
        <img src={logo} alt="gpt5_logo" />
        <p>Str123 K12 182 DK NL, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt5__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt5__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt5__footer-links_div">
        <h4>Get in touch</h4>
        <p>Str123 K12 182 DK NL</p>
        <p>+1-123456789</p>
        <p>info@email.net</p>
      </div>
    </div>

    <div className="gpt5__footer-copyright">
      <p>@2024 GPT-5. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
