import React, { memo, useMemo } from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/try.scss"
import tables from '../products/tables'
import { Link } from 'react-router-dom'

// Memoized catalog item component
const CatalogItem = memo(({ product }) => (
  <div className="catalog-item">
    <Link to={`/tables/${product.id}`} className="catalog-item-link">
      <img
        src={product.images[0]}
        alt={product.name}
        className="catalog-item-image"
        loading="lazy"
      />
    </Link>
  </div>
));

// Memoized sidebar component
const Sidebar = memo(() => (
  <div className="catalog-sidebar">
    <FilterSidebar />
  </div>
));

const TestComp4 = () => {
  // Memoize the product grid
  const productGrid = useMemo(() => (
    <div className="catalog-grid1">
      {tables.map((product) => (
        <CatalogItem 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  ), []); // Empty dependency array since tables is static

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        {productGrid}
      </div>
    </div>
  );
};

export default memo(TestComp4)