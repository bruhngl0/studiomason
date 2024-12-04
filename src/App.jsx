import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'



import Products from './components/Products'
import Clients from './components/Clients'
import ScreenVideo from './components/ScreenVideo'
import About from './components/About'
import ImageAni from './components/ImageAni'
import ScrollHero from './components/ScrollHero';
import ScreenSix from './components/ScreenSix';

import ClientOne from './components/ClientOne';

function App() {


  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<ScrollHero />}/>
        <Route path= "/screensix" element= {< ScreenSix/>} />
        <Route path= "/category-one" element= {< ClientOne/>} />

   

      </Routes>
    </Router>
  )
}

export default App
