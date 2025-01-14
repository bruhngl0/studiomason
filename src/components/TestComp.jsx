
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
              <img src={bigPlanters[0].images[2]} className="vase1" alt="Product" />
     </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[3].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[3].images[2]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/product/${bigPlanters[2].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[2].images[2]} />
           </Link>
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[1].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[1].images[1]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[4].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[4].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[5].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[5].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/product/${bigPlanters[6].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[6].images[0]} />
           </Link>
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[7].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[7].images[0]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[8].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[8].images[1]} /> 
        </Link>
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${bigPlanters[9].id}`} className="client-one-col2">
         <img src= {bigPlanters[9].images[0]} className='vase1' />
         </Link>
      </div>
      </div>




      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${bigPlanters[10].id}`} className="client-one-col2">
         <img src= {bigPlanters[10].images[0]} className='vase1' />
         </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[11].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[11].images[1]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/product/${bigPlanters[14].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[14].images[0]} />
           </Link>
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[13].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[13].images[0]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[12].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[12].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
      </div>


      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[15].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[15].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/product/${bigPlanters[16].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[16].images[0]} />
           </Link>
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[17].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[17].images[1]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[18].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[18].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${bigPlanters[19].id}`} className="client-one-col2">
         <img src= {bigPlanters[19].images[0]} className='vase1' />
         </Link>
      </div>
      </div>

      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${bigPlanters[20].id}`} className="client-one-col2">
         <img src= {bigPlanters[20].images[1]} className='vase1' />
         </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[21].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[21].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
           <Link to={`/product/${bigPlanters[22].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[22].images[1]} />
           </Link>
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[23].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[23].images[1]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[24].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[24].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${bigPlanters[25].id}`} className="client-one-col3-grid1-1">
           <img src = {bigPlanters[25].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
         <Link to={`/product/${bigPlanters[26].id}`} className="client-one-col3-grid1-2">
           <img src = {bigPlanters[26].images[0]} />
           </Link>
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <Link to={`/product/${bigPlanters[27].id}`} className="client-one-col3-grid1-3">
        <img src = {bigPlanters[27].images[1]} />
        </Link>
        </div>
        <div className='client-one-col3-grid1-4'>
        <Link to={`/product/${bigPlanters[28].id}`} className="client-one-col3-grid1-4">
        <img src = {bigPlanters[28].images[0]} /> 
        </Link>
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${bigPlanters[27].id}`} className="client-one-col2">
         <img src= {bigPlanters[27].images[0]} className='vase1' />
         </Link>
      </div>
      </div>


      
      </div>



    </div>
  )
}

export default TestComp
