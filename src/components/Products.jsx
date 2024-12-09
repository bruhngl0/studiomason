import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import ImageAni from './ImageAni';

import '../styles/products.scss';




const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [productDataSelect, setProductDataSelect] = useState(null)





  //Product Data

  const productData = [
    {
      id: "product-1",
      image: "love2.png",
      name: "Love Pot",
      description: "A beautiful pot to show your love and affection.",
      price: "$39.99",
      features: ["Feature one description", "Feature two description", "Feature three description"],
      specifications: {
        dimension: "20 x 30 cm",
        weight: "500g",
        material: "Premium Quality"
      }
    },
    {
      id: "product-2",
      image: "scrollpot2.png",
      name: "Scroll Pot",
      description: "A modern pot with a classic scroll design.",
      price: "$29.99",
      features: ["Feature A description", "Feature B description", "Feature C description"],
      specifications: {
        dimension: "15 x 20 cm",
        weight: "300g",
        material: "Ceramic"
      }
    },
    // Add more products here...
  ];
  

  const handleImageClick = (productId) => {
    const selectedProduct = productData.find((product => product.id === productId))
    console.log(selectedProduct)
    setSelectedId(selectedProduct.id);
    setSelectedImage(selectedProduct.image);
    setProductDataSelect(selectedProduct)
    
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedId(null);
    setProductDataSelect(null)
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
                  onClick={() => handleImageClick( "product-1")}
                >
                  <img 
                    src="one.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>

                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-2"
                  onClick={() => handleImageClick( "product-2")}
                >
                  <img 
                    src="two.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>
                </div>
                
              </div>
              <div className="scroll-item-two">
                <img src = "three.jpg" />
                <img src = "six.jpg" />
                
              </div>

              <div className="scroll-item-three">

                <img src = "five.jpg" />
                <img src = "six.jpg" />
                
              </div>
          
            </section>
          </motion.div>
        ) : (
          <Hero 
            image={selectedImage}
            onClose={handleClose}
            layoutId={selectedId}
            productData = {productDataSelect}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;