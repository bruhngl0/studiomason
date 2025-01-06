import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.scss';
import { p } from 'framer-motion/m';
import { Link } from 'react-router-dom';

const Hero = ({ image, onClose, layoutId, productData }) => {

  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      className="hero-container"
    >
      <motion.div 
        className="hero-transition-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hero-header"
      >
        <Link to = "/products">       <button onClick={onClose} className="back-button">
          ← Back
        </button>  </Link>

      </motion.div>

      <div className="main-content">
        <div className="hero-image-wrapper">
          <motion.div
            layoutId={layoutId}
            initial={{ y: 1, opacity: 1 }}
            animate={{ y: 1, opacity: 1 }}
            
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
            <h1>{productData.name}</h1>
            <p>
             {productData.description}
            </p>
          </div>

          <div className="features-specs">
            <div className="features">
              <h2>Features</h2>
              <ul>
                {productData.features.map((features, index)=> (
                  <li key = {index}>{features}</li>
                ))}
              </ul>
            </div>

            <div className="specifications">
              <h2>Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span>Dimension</span>
                  <span>{productData.specifications.dimension}</span>
                </div>
                <div className="spec-item">
                  <span>Weight</span>
                  <span>{productData.specifications.weight}</span>
                </div>
                <div className="spec-item">
                  <span>Material</span>
                  <span>{productData.specifications.material}</span>
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
                <p className="price">{productData.price}</p>
              </div>
              <button className="cta-button">
                how to buy
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;