import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hero.scss';

const Hero = ({ image, onClose, layoutId, productData }) => {
  if (!productData) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hero-container"
    >
      <div className="hero-content">
        {/* Left Side - Image */}
        <div className="hero-left">
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

        {/* Right Side - Product Details */}
        <div className="hero-right">
          <div className="product-intro">
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
          </div>

          <div className="features-specs">
            {productData.features && (
              <div className="features">
                <h3>Features:</h3>
                <ul>
                  {productData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {productData.specifications && (
              <div className="specifications">
                <h3>Specifications:</h3>
                <ul>
                  {Array.isArray(productData.specifications) ? (
                    productData.specifications.map((spec, index) => (
                      <li key={index} className="spec-item">
                        <span className="spec-name">{spec.name}:</span>
                        <span className="spec-value">{spec.value}</span>
                      </li>
                    ))
                  ) : (
                    Object.entries(productData.specifications).map(([key, value], index) => (
                      <li key={index} className="spec-item">
                        <span className="spec-name">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="product-actions">
            <Link to = "/buyGuide">
            <button className="cta-button">
              HOW TO BUY
            </button>
            </Link>
            <Link to="/products">
              <button onClick={onClose} className="back-button">
                ←BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;