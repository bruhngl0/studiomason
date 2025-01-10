
import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"
import tables from '../products/tables'
import { Link } from 'react-router-dom'
const TestComp4 = ({}) => {



  
  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>
     

     <div className='client-one-combined'>


     <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/tables/${tables[0].id}`} className="client-one-col2">
              <img src={tables[0].images[2]} className="vase1" alt="Product" />
     </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/tables/${tables[3].id}`} className="client-one-col3-grid1-1">
           <img src = {tables[3].images[2]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/tables/${tables[2].id}`} className="client-one-col3-grid1-2">
           <img src = {tables[2].images[2]} />
           </Link>
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/tables/${tables[1].id}`} className="client-one-col3-grid1-3">
        <img src = {tables[1].images[1]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/tables/${tables[4].id}`} className="client-one-col3-grid1-4">
        <img src = {tables[4].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
      </div> 
      </div>



    </div>
  )
}

export default TestComp4