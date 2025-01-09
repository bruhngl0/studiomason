import React from "react";
import { useParams } from "react-router-dom";
import smallPlanters from "../products/smallPlanters";
import Slider from "react-slick";
import "../styles/productPage.scss"

const ProductPage = () => {
  const { id } = useParams();
  const product = smallPlanters.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 501,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="product-page">
      <div className="product-page-one">
      {/* Carousel */}
      <button>back</button>
      <div className="product-carousel">
        <Slider {...sliderSettings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${product.name} - ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      </div>

<div className="product-page-two">
      {/* Product Details */}

      <div className="pp-2-1">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      </div>

      <div className="pp-2-2">
      <ul className="ul-1">
      <h3>Features:</h3>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <ul className="ul-2">
      <h3>Specifications:</h3>
        {product.specifications.map((spec, index) => (
          <li key={index}>
           {spec.name}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{spec.value}
          </li>
        ))}
      </ul>
    
    
      </div>
      <div className="product-page-three">
      <p>Price: ${product.price}</p>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
