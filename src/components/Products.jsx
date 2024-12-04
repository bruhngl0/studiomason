import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import ImageAni from './ImageAni';

import '../styles/products.scss';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleImageClick = (image, id) => {
    setSelectedId(id);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedId(null);
  };

  return (
    <div className="products-container">
      <AnimatePresence mode="wait">
        {!selectedImage ? (
          <motion.div className="sticky-container">
            <section className="sticky-section">
              <div className="content">
                <ImageAni />
              </div>
            </section>

            <section className="scroll-section">
              <div className="scroll-item">
              
                <div className='image-container-love'>
                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-1"
                  onClick={() => handleImageClick("love2.png", "product-1")}
                >
                  <img 
                    src="love2.png" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>

                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-2"
                  onClick={() => handleImageClick("scrollpot2.png", "product-2")}
                >
                  <img 
                    src="scrollpot2.png" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>
                </div>
                
              </div>
              <div className="scroll-item-two">
                <img src = "scrollpot4.png" />
                <img src = "scrollpot8.png" />
                
              </div>

              <div className="scroll-item-three">

                <img src = "scrollpot5.png" />
                <img src = "scrollpot7.png" />
                
              </div>
          
            </section>
          </motion.div>
        ) : (
          <Hero 
            image={selectedImage}
            onClose={handleClose}
            layoutId={selectedId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;