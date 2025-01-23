import React from 'react';
import FilterSidebar from './FilterSidebar';
import "../styles/try1.scss";
import smallPlanters from '../products/smallPlanters';
import { Link } from 'react-router-dom';

const Col3 = () => {
  return (
    <div className="catalog-container">
      {/* Sidebar */}
      <div className="catalog-sidebar">
        <FilterSidebar />
      </div>

      {/* Product Grid */}
      <div className="catalog-content">
        <div className="catalog-grid">
          {smallPlanters.map((product, index) => (
            <div key={index} className="catalog-item">
              <Link to={`/smallPlanters/${product.id}`} className="catalog-item-link">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="catalog-item-image"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col3;
