import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">S</span>
          <span className="logo-text">Shopsy</span>
        </Link>

        <div className="navbar-search">
          <input type="text" placeholder="Search for premium products..." />
          <button className="search-btn">
            <Search size={18} />
          </button>
        </div>

        <div className="navbar-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/deals" className="nav-link highlight">Deals</Link>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn">
            <User size={24} />
          </button>
          <button className="icon-btn cart-btn">
            <ShoppingBag size={24} />
            <span className="cart-badge">3</span>
          </button>
          <button 
            className="icon-btn mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/products" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
        <Link to="/categories" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
        <Link to="/deals" className="mobile-link highlight" onClick={() => setIsMobileMenuOpen(false)}>Deals</Link>
      </div>
    </nav>
  );
};

export default Navbar;
