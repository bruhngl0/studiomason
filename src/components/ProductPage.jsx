import React from "react";
import { useParams } from "react-router-dom";
import bigPlanters from "../products/bigPlanters";
import Slider from "react-slick";
import "../styles/productPage.scss"

const ProductPage = () => {
  const { id } = useParams();
  const product = bigPlanters.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      {/* Carousel */}
      <div className="product-carousel">
        <Slider {...sliderSettings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${product.name} - ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Details */}
      <p>{product.description}</p>
      <h3>Specifications:</h3>
      <ul>
        {product.specifications.map((spec, index) => (
          <li key={index}>
            {spec.name}: {spec.value}
          </li>
        ))}
      </ul>
      <h3>Features:</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
