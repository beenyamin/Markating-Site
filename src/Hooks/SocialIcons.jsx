import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <ul className="example-2">
      <li className="icon-content">
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          data-social="facebook"
        >
          <div className="filled"></div>
          <FaFacebook size={32} color="currentColor" />
        </a>
        <div className="tooltip">Facebook</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          data-social="instagram"
        >
          <div className="filled"></div>
          <FaInstagram size={32} color="currentColor" />
        </a>
        <div className="tooltip">Instagram</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.youtube.com/"
          aria-label="YouTube"
          data-social="youtube"
        >
          <div className="filled"></div>
          <FaYoutube size={32} color="currentColor" />
        </a>
        <div className="tooltip">YouTube</div>
      </li>
      <li className="icon-content">
        <a
          href="https://twitter.com/"
          aria-label="Twitter"
          data-social="twitter"
        >
          <div className="filled"></div>
          <FaTwitter size={32} color="currentColor" />
        </a>
        <div className="tooltip">Twitter</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          data-social="linkedin"
        >
          <div className="filled"></div>
          <FaLinkedin size={32} color="currentColor" />
        </a>
        <div className="tooltip">LinkedIn</div>
      </li>
    </ul>
  );
};

export default SocialIcons;
