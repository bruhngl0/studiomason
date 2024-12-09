import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/description.scss";

const Description = ({  threshold = 0.4 }) => {
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
        <img src= "team.jpeg" alt="Decorative Item" />
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
        <p> Based in Bangalore, we create premium furniture and decor using High-Performance Concrete (HPC), combining industrial strength with contemporary design. Each handmade piece reflects meticulous craftsmanship, durability, and refined functionality. <br/> <br/> We excel in custom creations tailored to your vision, ensuring seamless communication and exceptional quality. With a commitment to on-time delivery, we provide both reliable service and unmatched craftsmanship.</p>
        <p> Based in Bangalore, we create premium furniture and decor using High-Performance Concrete (HPC), combining industrial strength with contemporary design. Each handmade piece reflects meticulous craftsmanship, durability, and refined functionality.<br/> <br/> We excel in custom creations tailored to your vision, ensuring seamless communication and exceptional quality. With a commitment to on-time delivery, we provide both reliable service and unmatched craftsmanship.</p>
      </motion.div>
    </section>
  );
};

export default Description;
