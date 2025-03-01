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
        <p>CATEGORIES</p>
        <ul>

        <li style = {{color: "black"}}>
            <a>CATEGORIES</a>
          </li>
          <li>
            <a href="/planters">PLANTERS</a>
          </li>
          <li>
            <a href="/desk-planters">DESK PLANTERS</a>
          </li>

          <li>
            <a href="/breezeBlocks">BREEZE BLOCKS</a>
          </li>
          <li>
            <a href="/furniture">TABLES</a>
          </li>

       

          <li>
            <a href="/test-comp3">WALL CLADDING</a>
          </li>

          <li>
            <a href="/test-comp3">SCULPTURES</a>
          </li>

        </ul>
      </div>

  
     <a href= "/screensix">
      <button className='back-btn2'>
      ←BACK
      </button>
      </a>
    </div>
  );
};

export default FilterSidebar;