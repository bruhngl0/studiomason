import React from 'react'
import FilterSidebar from './FilterSidebar'
import "../styles/clientone.scss"

const ClientOne = () => {
  return (
    <div className='client-one-main1'>
      <div className='client-one-col1'>
        <FilterSidebar />
      </div>

      <div className='client-one-col2'>
         <img src= "vasef7.png" className='vase1' />
      </div>

      <div className='client-one-col3'>

      <div className='client-one-col3-grid1'>    
         <div className='client-one-col3-grid1-1'>
           <img src = "vasef4.png" />
         </div>
         <div className='client-one-col3-grid1-2'>
           <img src = "vasef3.png" />
         </div>
       </div>
       
       <div className='client-one-col3-grid2'> 
        <div className='client-one-col3-grid1-3'>
        <img src = "vasef5.png" />
        </div>
        <div className='client-one-col3-grid1-4'>
        <img src = "vasef.png" /> 
        </div>
       </div>

      </div>
    </div>
  )
}

export default ClientOne
