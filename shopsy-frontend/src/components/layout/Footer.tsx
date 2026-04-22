import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">S</span>
            <span className="logo-text">Shopsy</span>
          </div>
          <p className="footer-desc">
            The premium e-commerce destination for modern living. Curated products, exceptional quality, delivered directly to your door.
          </p>
        </div>
        
        <div className="footer-links-group">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Bestsellers</a></li>
            <li><a href="#">Featured Collections</a></li>
            <li><a href="#">Sale & Offers</a></li>
          </ul>
        </div>
        
        <div className="footer-links-group">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Stay in the loop</h3>
          <p>Subscribe for exclusive drops and deals.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Digital Metro. All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
