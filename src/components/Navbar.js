import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="footer-links-container">
      <Link
        to="/"
        className={activeLink === '/' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/')}
      >
        <img
          src="https://i.postimg.cc/m2Rt150T/home.png"
          alt="Home"
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        />
      </Link>
      <Link
        to="/Cart"
        className={activeLink === '/Cart' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/cart')}
      >
        <img
          src="https://i.postimg.cc/QMhmbswM/cart3.png"
          alt="cart"
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        />
      </Link>
      <Link
        to="/dispatch"
        className={activeLink === '/dispatch' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/dispatch')}
      >
        <img
          src="https://i.postimg.cc/Dzmsn9Py/dispatch.png"
          alt="Dispatch"
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        />
      </Link>
      <Link
        to="/notifications"
        className={activeLink === '/notifications' ? 'active-link' : ''}
        onClick={() => handleLinkClick('/notifications')}
      >
        <img
          src="https://i.postimg.cc/cLkg9DGq/notification.png"
          alt="Notifications"
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        />
      </Link>
    </div>
  );
};

export default Navbar;
