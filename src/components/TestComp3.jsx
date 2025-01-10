import React from 'react';
import "../styles/testcomp3.scss";

const TestComp3 = () => {
  return (
    <div className='test-comp3'>
      <div className="blur-background"></div>
      <a href = "#"  onClick={(e) => {
        e.preventDefault(); // Prevent the default anchor tag behavior
        window.history.back(); // Navigate to the previous page
      }}>
      <button className="testcomp-btn">←BACK</button>
      </a>
      <p>COMING SOON...</p>
    </div>
  );
};

export default TestComp3;
