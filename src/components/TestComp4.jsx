import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"
import tables from '../products/tables'
import { Link } from 'react-router-dom'

const TestComp4 = () => {
  // Array of table configurations to match your existing layout
  const tableDisplayOrder = [
    { id: tables[0].id, imageIndex: 0 },  // First large image
    { id: tables[3].id, imageIndex: 2 },  // Top left
    { id: tables[2].id, imageIndex: 2 },  // Top right
    { id: tables[1].id, imageIndex: 1 },  // Bottom left
      // Bottom right
  ];

  return (
    <div className="catalog-container">
      {/* Sidebar */}
      <div className="catalog-sidebar">
        <FilterSidebar />
      </div>

      {/* Product Grid */}
      <div className="catalog-content">
        <div className="catalog-grid1">
          {tableDisplayOrder.map((item, index) => (
            <div key={index} className="catalog-item">
              <Link to={`/tables/${item.id}`} className="catalog-item-link">
                <img
                  src={tables.find(table => table.id === item.id).images[item.imageIndex]}
                  alt="Table"
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

export default TestComp4