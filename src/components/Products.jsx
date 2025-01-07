import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import ImageAni from './ImageAni';
import { useNavigate } from 'react-router-dom';

import '../styles/products.scss';




const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [productDataSelect, setProductDataSelect] = useState(null)


  const navigate = useNavigate()



  //Product Data

  const productData = [
    {
      id: "product-1",
      image:  "masterRio1.jpg",
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
      image: "masterRio2.jpg",
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

    {
      id: "product-3",
      image: "masterRio3.jpg",
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

    {
      id: "product-4",
      image: "masterRio4.jpg",
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

    {
      id: "product-5",
      image: "rioMaster5.jpg",
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

    {
      id: "product-6",
      image: "rioMaster6.jpg",
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
                    src="masterRio1.jpg" 
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
                    src="masterRio2.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>
                </div>


                
                
              </div>
              <div className="scroll-item-two">

              <div className='image-container-love'>
                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-3"
                  onClick={() => handleImageClick( "product-3")}
                >
                  <img 
                    src="masterRio3.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>

                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-4"
                  onClick={() => handleImageClick( "product-4")}
                >
                  <img 
                    src="masterRio4.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>
                </div>
                
              </div>

              <div className="scroll-item-three">

              <div className='image-container-love'>
                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-5"
                  onClick={() => handleImageClick( "product-5")}
                >
                  <img 
                    src="rioMaster5.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>

                <motion.div 
                  className="image-container-scroll"
                  layoutId="product-6"
                  onClick={() => handleImageClick( "product-6")}
                >
                  <img 
                    src="masterRio6.jpg" 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </motion.div>
                </div>
                
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