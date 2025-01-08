import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"
import smallPlanters from '../products/smallPlanters'
import { Link } from 'react-router-dom'



const TestComp2 = ({}) => {

  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>
     

     <div className='client-one-combined'>


     <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${smallPlanters[0].id}`} className="client-one-col2">
              <img src={smallPlanters[0].images[1]} className="vase1" alt="Product" />
     </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${smallPlanters[3].id}`} className="client-one-col3-grid1-1">
           <img src = {smallPlanters[3].images[2]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[2].images[2]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[1].images[1]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[4].images[0]} /> 
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${smallPlanters[5].id}`} className="client-one-col3-grid1-1">
           <img src = {smallPlanters[5].images[0]} />
           </Link>?
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[6].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[7].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[8].images[1]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${smallPlanters[9].id}`} className="client-one-col2">
         <img src= {smallPlanters[9].images[0]} className='vase1' />
         </Link>
      </div>
      </div>




      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${smallPlanters[10].id}`} className="client-one-col2">
         <img src= {smallPlanters[10].images[1]} className='vase1' />
         </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${smallPlanters[11].id}`} className="client-one-col3-grid1-1">
           <img src = {smallPlanters[11].images[1]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[14].images[0]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[13].images[0]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[12].images[0]} /> 
        </div>
       </div>
       </div>
      </div>


      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${smallPlanters[15].id}`} className="client-one-col3-grid1-1">
           <img src = {smallPlanters[15].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[16].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[17].images[1]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[18].images[0]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${smallPlanters[19].id}`} className="client-one-col2">
         <img src= {smallPlanters[19].images[0]} className='vase1' />
         </Link>
      </div>
      </div>

      <div className='client-one-col2-raja'>
      <div className='client-one-col2'>
      <Link to={`/product/${smallPlanters[20].id}`} className="client-one-col2">
         <img src= {smallPlanters[20].images[1]} className='vase1' />
         </Link>
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
         <Link to={`/product/${smallPlanters[21].id}`} className="client-one-col3-grid1-1">
           <img src = {smallPlanters[21].images[0]} />
           </Link>
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[22].images[0]} />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[23].images[1]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[24].images[0]} /> 
        </div>
       </div>
       </div>
      </div>



      <div className='client-one-col2-raja'>
      <div className='client-one-col3'>
      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = {smallPlanters[25].images[0]} />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = {smallPlanters[26].images[0]} />
         </div>
       </div>
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = {smallPlanters[27].images[1]} />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = {smallPlanters[28].images[0]} /> 
        </div>
       </div>
       </div>
       <div className='client-one-col2'>
       <Link to={`/product/${smallPlanters[27].id}`} className="client-one-col2">
         <img src= {smallPlanters[27].images[0]} className='vase1' />
         </Link>
      </div>
      </div>


      
      </div>



    </div>
  )
}

export default TestComp2
