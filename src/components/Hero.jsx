import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.scss';

const Hero = ({ image, onClose, layoutId }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      className="hero-container"
    >
      <motion.div 
        className="hero-transition-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hero-header"
      >
        <button onClick={onClose} className="back-button">
          ← Back
        </button>
      </motion.div>

      <div className="main-content">
        <div className="hero-image-wrapper">
          <motion.div
            layoutId={layoutId}
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            
            className="hero-image-container"
          >
            <img 
              src={image || "/api/placeholder/1200/800"} 
              alt="Product Hero"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="product-details"
        >
          <div className="product-intro">
            <h1>Product Name</h1>
            <p>
              A detailed description of your amazing product goes here. This should capture
              the essence of what makes your product special.
            </p>
          </div>

          <div className="features-specs">
            <div className="features">
              <h2>Features</h2>
              <ul>
                <li>Feature one description</li>
                <li>Feature two description</li>
                <li>Feature three description</li>
              </ul>
            </div>

            <div className="specifications">
              <h2>Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span>Dimension</span>
                  <span>20 x 30 cm</span>
                </div>
                <div className="spec-item">
                  <span>Weight</span>
                  <span>500g</span>
                </div>
                <div className="spec-item">
                  <span>Material</span>
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="product-footer"
          >
            <div className="footer-content">
              <div className="price-info">
                <p>Starting from</p>
                <p className="price">$299.99</p>
              </div>
              <button className="cta-button">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;