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
        <h2>CATEGORIES</h2>
        <ul>
          <li>
            <a href="/test-comp">PLANTERS</a>
          </li>
          <li>
            <a href="/test-comp2">DESK PLANTERS</a>
          </li>
          <li>
            <a href="/test-comp4">TABLES</a>
          </li>

          <li>
            <a href="/test-comp3">BREEZE BLOCKS</a>
          </li>

          <li>
            <a href="/test-comp3">WALL CLADDING</a>
          </li>

          <li>
            <a href="/test-comp3">SCULPTURES</a>
          </li>

        </ul>
      </div>

  
     <Link to= "/screensix">
      <button>
      ←BACK
      </button>
      </Link>
    </div>
  );
};

export default FilterSidebar;