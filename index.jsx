import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes ,Route } from "react-router-dom"
import './index.css'
import Footer from './components/Footer';
import Home from './pages/Vans/Home';
import About from './pages/Vans/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails'; 
import Layout from './components/Layout'
import DashBoard from './pages/Host/DashBoard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVanPrices from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = { <Layout />}>
          <Route index   element ={<Home />}/>
          <Route  path="about"  element ={ <About/> }/>
          <Route  path="vans"  element ={<Vans />}/>
          <Route  path="vans/:id"  element ={<VanDetails />}/>
          
          <Route path='host' element = {<HostLayout />} >
              <Route index element = {<DashBoard/>} />
              <Route path='income' element = {<Income />} />
              <Route path='reviews' element = {<Reviews />} />
              <Route path='vans' element = {<HostVans />} />
              <Route path='vans/:id' element = {<HostVansDetail />} >
                  <Route index element ={<HostVanInfo/> } />
                  <Route path= "pricing" element = {<HostVanPrices/>} />
                  <Route path='photos' element = {<HostVanPhotos />} />
              </Route>
          </Route> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


createRoot(document.getElementById('root')).render(
  <App />
)
