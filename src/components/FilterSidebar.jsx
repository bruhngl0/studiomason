// FilterSidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/filtersidebar.scss"

const FilterSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    price: false,
    color: false,
    sustainability: false,
    brand: false,
    material: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="filter-sidebar">
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="#">Coffee & Accent Tables</a>
          </li>
          <li>
            <a href="#">Dining Table & Chair</a>
          </li>
          <li>
            <a href="#">Outdoor Lounge Seating</a>
          </li>
        </ul>
      </div>

      {[
        { id: 'price', label: 'Price' },
        { id: 'color', label: 'Color' },
        { id: 'sustainability', label: 'Sustainability' },
        { id: 'brand', label: 'Brand' },
        { id: 'material', label: 'Material' }
      ].map(section => (
        <div key={section.id} className="filter-section">
          <button
            onClick={() => toggleSection(section.id)}
            className={`section-header ${expandedSections[section.id] ? 'expanded' : ''}`}
          >
            <span>{section.label}</span>
            <span className="toggle-icon">
              {expandedSections[section.id] ? '−' : '+'}
            </span>
          </button>
          {expandedSections[section.id] && (
            <div className="section-content">
              <p>Section content goes here</p>
            </div>
          )}
        </div>

        
      ))}
     <Link to= "/">
      <button>
        back
      </button>
      </Link>
    </div>
  );
};

export default FilterSidebar;