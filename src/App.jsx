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


import ClientOne from './components/ClientOne';
import TestComp from './components/TestComp';
import TestComp2 from './components/TestComp2';
import ProductPageSmallPlanters from './components/ProductPageSmallPlanters';


const categoryOne = [
  { id: 1, image1: 'riovase1.jpg', image2: 'riovase2.jpg', image3: 'riovase3.jpg', image4: 'riovase5.jpg', image5:'riovase4.jpg', }, 
];


const categoryTwo = [
  { id: 1, image1: 'vasef7.png', image2: 'vasef4.png', image3: 'vasef5.png', image4: 'vasef3.png', image5:'vasef.png', },  
];
const categoryThree = [
  { id: 1, image1: 'vasef7.png', image2: 'vasef4.png', image3: 'vasef5.png', image4: 'vasef3.png', image5:'vasef.png', },  
];
const categoryFour = [
  { id: 1, image1: 'vasef7.png', image2: 'vasef4.png', image3: 'vasef5.png', image4: 'vasef3.png', image5:'vasef.png', },  
];
const categoryFive = [
  { id: 1, image1: 'vasef7.png', image2: 'vasef4.png', image3: 'vasef5.png', image4: 'vasef3.png', image5:'vasef.png', },  
];
const categorySix = [
  { id: 1, image1: 'vasef7.png', image2: 'vasef4.png', image3: 'vasef5.png', image4: 'vasef3.png', image5:'vasef.png', },  
];




function App() {


  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<ScrollHero />}/>
        <Route path= "/screensix" element= {< ScreenSix/>} />
        <Route path= "/bespoke" element= {<Clients/>} />
        <Route path= "/enquiry" element= {<Enquiry /> } />
        <Route path= "/category-one" element= {<ClientOne props = {categoryOne} />} />
        <Route path= "/category-two" element = {<ClientOne props = {categoryTwo}/>} />
        <Route path= "/category-three" element = {<ClientOne props = {categoryThree}/>} />
        <Route path= "/category-four" element = {<ClientOne props = {categoryFour}/>} />
        <Route path= "/category-five" element = {<ClientOne props = {categoryFive}/>} />
        <Route path= "/category-six" element = {<ClientOne props = {categorySix}/>} />
        <Route path= "/test-comp" element = {<TestComp props = {bigPlanters}/>} />
        <Route path= "/test-comp2" element = {<TestComp2 props = {smallPlanters}/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/smallPlanters/:id" element={<ProductPageSmallPlanters />} />

        <Route path= "/products" element={<Products />} />

   

      </Routes>
    </Router>
  )
}

export default App
