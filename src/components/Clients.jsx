import React from 'react'
import Layout from './Layout'
import Layout2 from './Layout2'
import Layout3 from './Layout3'
import Layout4 from './Layout4'
import { Link } from 'react-router-dom'

import "../styles/client.scss"

const Clients = () => {
  return (
    <div className='client-main'>
   
     <p>BeSpoke.</p>
    

<Link to="/bespokeint" className="client-link">
    <div className='client-one'>

     <Layout />
     <Layout2 />
     </div>

     <div className='client-two'>
     <Layout3 />
     <Layout4 />
     </div>
     </Link>
      
    </div>
  )
}

export default Clients
