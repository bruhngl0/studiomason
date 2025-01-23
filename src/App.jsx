import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import bigPlanters from './products/bigPlanters';


import Products from './components/Products'
import Clients from './components/Clients'
import ScreenVideo from './components/ScreenVideo'
import About from './components/About'
import ImageAni from './components/ImageAni'
import ScrollHero from './components/ScrollHero';
import ScreenSix from './components/ScreenSix';
import Enquiry from './components/Enqury';
import ProductPage from './components/ProductPage';

import smallPlanters from './products/smallPlanters';

import BuyGuide from "./components/BuyGuide"
import ClientOne from './components/ClientOne';
import TestComp from './components/TestComp';
import TestComp2 from './components/TestComp2';
import ProductPageSmallPlanters from './components/ProductPageSmallPlanters';
import BulkOrders from "./components/BulkOrders"
import Shipping from "./components/Shipping"
import Return from "./components/Return"
import Terms from "./components/Terms"
import Privacy from "./components/Privacy"
import Care from "./components/Care"
import TestComp3 from './components/TestComp3';
import TestComp4 from './components/TestComp4';
import ProductPageTables from './components/ProductPageTables';
import BeSpokeInt from './components/BeSpokeInt';
import Try from './components/Try';

import Col3 from './components/Col3';








function App() {


  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<ScrollHero />}/>
        <Route path= "/screensix" element= {< ScreenSix/>} />
        <Route path= "/bespoke" element= {<Clients/>} />
        <Route path= "/enquiry" element= {<Enquiry /> } />
        <Route path= "/test-comp" element = {<Try />} />
        <Route path= "/test-comp2" element = {<Col3 />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path= "/smallPlanters/:id" element = {<ProductPageSmallPlanters />} />
        <Route path= "/tables/:id" element = {<ProductPageTables />} />
        <Route path= "/try" element = {<Try />} />
        <Route path= "/try1" element = {<Col3 />} />
      
        <Route path="/buyGuide" element={<BuyGuide />} />
        <Route path="/bulkOrders" element={<BulkOrders />} />
    x

        <Route path= "/products" element={<Products />} />

        <Route path= "/shipping-policy" element={<Shipping />} />
        <Route path= "/shipping-policy" element={<Shipping />} />
        <Route path= "/return-policy" element={<Return />} />
        <Route path= "/terms-policy" element={<Terms />} />
        <Route path= "/privacy-policy" element={<Privacy />} />
        <Route path= "/care-instructions" element={<Care />} />
        <Route path= "/test-comp3" element={<TestComp3 />} />
        <Route path= "/test-comp4" element={<TestComp4 />} />
        <Route path= "/bespokeInt" element={<BeSpokeInt />} />

   

      </Routes>
    </Router>
  )
}

export default App
