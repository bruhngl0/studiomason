
import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"
import bigPlanters from '../products/bigPlanters'
import { Link } from 'react-router-dom'
const TestComp = ({}) => {



  
  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>
     

     <div className='client-one-combined'>


     <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${bigPlanters[0].id}`} className="client-one-col2">
              <img src={bigPlanters[0].images[0]} className="vase1" alt="Product" />
     </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
         <img src= {bigPlanters[0].images[0]} className='vase1' />
      </div>
      </div>




      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
         <img src= {bigPlanters[0].images[0]} className='vase1' />
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
      </div>


      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
         <img src= {bigPlanters[0].images[0]} className='vase1' />
      </div>
      </div>

      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
         <img src= {bigPlanters[0].images[0]} className='vase1' />
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {bigPlanters[1].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {bigPlanters[2].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {bigPlanters[3].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {bigPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
         <img src= {bigPlanters[0].images[0]} className='vase1' />
      </div>
      </div>


      
      </div>



    </div>
  )
}

export default TestComp
