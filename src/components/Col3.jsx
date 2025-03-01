import React from 'react';
import { Link } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import "../styles/bruh.scss";
import smallPlanters from '../products/smallPlanters';

// Catalog Item Component
const CatalogItem = ({ product }) => {
  if (!product || !product.images || !product.images[0]) return null;

  return (
    <div className="catalog-item">
      <Link to={`/smallPlanters/${product.id}`} className="catalog-item-link">
        <img
          src={product.images[0]}
          alt={product.name || "Product Image"}
          className="catalog-item-image"
          loading="lazy"
          width="250"
          height="250"
          onError={(e) => { e.target.src = "fallback-image.jpg"; }}
        />
      </Link>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => (
  <div className="catalog-sidebar">
    <FilterSidebar />
  </div>
);

const Col3 = () => {
  if (!smallPlanters || !Array.isArray(smallPlanters)) {
    return <div>Error: No products found!</div>;
  }

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        <div className="catalog-grid1">
          {smallPlanters.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col3;

