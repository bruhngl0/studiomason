import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import "../styles/try.scss";
import smallPlanters from '../products/smallPlanters';

const ITEMS_PER_PAGE = 10; // Load only 10 items per page

const CatalogItem = memo(({ product }) => (
  <div className="catalog-item">
    <Link to={`/smallPlanters/${product.id}`} className="catalog-item-link">
      <img
        src={product.images[0]}
        alt={product.name}
        className="catalog-item-image"
        loading="lazy"
      />
    </Link>
  </div>
));

const Sidebar = memo(() => (
  <div className="catalog-sidebar">
    <FilterSidebar />
  </div>
));

const Col3 = () => {
  const [page, setPage] = useState(1);
  const paginatedProducts = smallPlanters.slice(0, page * ITEMS_PER_PAGE);

  return (
    <div className="catalog-container">
      <Sidebar />
      <div className="catalog-content">
        <div className="catalog-grid1">
          {paginatedProducts.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </div>
        {page * ITEMS_PER_PAGE < smallPlanters.length && (
          <button className="load-more" onClick={() => setPage(page + 1)}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Col3);

