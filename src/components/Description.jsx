import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/description.scss";

const Description = ({ threshold = 0.4 }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, {
    amount: threshold,
    once: false, // Change to false if you want the animation to replay when scrolling back up
  });

  const isImageInView = useInView(imageRef, {
    amount: threshold,
    once: false, // Same replay logic
  });

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
   
   
    "founders_together1.jpg",
    "team.jpg",
    "founder_2.jpg",
    "founder_1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1], // Smooth easing
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: '-10vw', // Starts off-screen to the left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="description-wrapper">
      {/* Image Section */}
      <motion.div
        className="description-image"
        ref={imageRef}
        variants={imageVariants}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
      >
        <img src={images[currentImage]} alt={`Decorative Item ${currentImage + 1}`} />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="description-text"
        ref={textRef}
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        <h1>MEET THE TEAM</h1>
        <p>
        At Studio Mason, we manufacture premium furniture and decor crafted from High-Performance
Concrete (HPC) and are based in the garden city of Bangalore - India.<br/> <br/>We bring together the
strength of industrial-grade materials with the sophistication of contemporary design, producing
pieces that are not only durable but also refined and functional.<br/> <br/>Each item is handmade,
showcasing our meticulous eye for detail and commitment to quality. We take pride in our
flexibility to customize creations to fit your unique vision, with a streamlined communication
process that ensures clarity and ease every step of the way. At Studio Mason, we are dedicated to
delivering on time, every time, so you can count on us for both exceptional craftsmanship and
reliable service.
        </p>
      </motion.div>
    </section>
  );
};

export default Description;

