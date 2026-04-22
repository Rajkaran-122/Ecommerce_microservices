import React from 'react';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">Premium Collection 2026</div>
            <h1 className="hero-title">
              Elevate Your <span className="text-gradient">Everyday</span> Lifestyle
            </h1>
            <p className="hero-subtitle">
              Discover curated tech, fashion, and living essentials. Experience shopping reimagined with AI-powered recommendations.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Shop Now <ArrowRight size={20} />
              </Link>
              <button className="btn btn-secondary btn-lg">
                Explore Features
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-card glass animate-pulse-glow">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium Tech" className="hero-img" />
              <div className="floating-badge top-right glass">
                <Star className="text-yellow" size={16} fill="currentColor" />
                <span>4.9/5</span>
              </div>
              <div className="floating-badge bottom-left glass">
                <span className="price">$299.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <div className="feature-grid">
          <div className="feature-card glass">
            <div className="feature-icon bg-primary-light">
              <Zap size={24} className="text-primary" />
            </div>
            <h3>Lightning Fast Delivery</h3>
            <p>Get your premium items delivered within 24 hours.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon bg-secondary-light">
              <Shield size={24} className="text-secondary" />
            </div>
            <h3>Secure Transactions</h3>
            <p>Enterprise-grade encryption for your peace of mind.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon bg-accent-light">
              <Truck size={24} className="text-accent" />
            </div>
            <h3>Free Returns</h3>
            <p>Not satisfied? Return it within 30 days, no questions asked.</p>
          </div>
        </div>
      </section>

      {/* Featured Products (Mockup) */}
      <section className="trending-section container">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>
          <Link to="/products" className="view-all-link">View All <ArrowRight size={16} /></Link>
        </div>
        
        <div className="products-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card glass">
              <div className="product-image">
                <img src={`https://images.unsplash.com/photo-${1500000000000 + item}?auto=format&fit=crop&w=300&q=80`} alt="Product" />
                <button className="add-to-cart-quick">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">Electronics</div>
                <h3 className="product-name">Premium Wireless Headphones Pro</h3>
                <div className="product-price-row">
                  <span className="product-price">$349.00</span>
                  <div className="product-rating">
                    <Star size={14} fill="var(--color-primary)" color="var(--color-primary)" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
