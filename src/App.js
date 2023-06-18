import './App.css';
import './index.css'
import products from './components/ProductItems/Product.json'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

import Footer from './components/Footer/Footer';


import ProductItems from './components/ProductItems/ProductItems';
import AboutUs from './components/AboutPage/AboutUs';
// import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Product from './components/Product/Product';
import Paper from './components/Product/Paper';
import Plastic from './components/Product/Plastic';
import Metal from './components/Product/Metal';
import ContactUs from './components/ContactUs/ContactUs';
import Quality from './components/Quality/Quality';
import ScrollToTop from './components/scrollToTop/scrollToTop';

// import Strengths from './components/Strengths/Strengths';

function App() {
  return (

    <Router>

    <div className='app__bg'>

    <ScrollToTop/>
    
    <Routes>
          <Route path="/" element={ <Intro/>} />
          
   
          
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/menu" element={<Product/>} />
          <Route path="/paper" element={<Paper/>} />
          <Route path="/plastic" element={<Plastic/>} >
          
          

          </Route>
          <Route path="/LDPE" element={<ProductItems data={products.LDPE}/>} />
          <Route path="/POM" element={<ProductItems data={products.POM}/>} />
          <Route path="/EPS" element={<ProductItems data={products.EPS}/>} />
          <Route path="/PP" element={<ProductItems data={products.PP}/>} />
          <Route path="/PET" element={<ProductItems data={products.PET}/>} />
          <Route path="/PVC" element={<ProductItems data={products.PVC}/>} />
          <Route path="/PS" element={<ProductItems data={products.PS}/>} />
          <Route path="/HDPE" element={<ProductItems data={products.HDPE}/>} />
          <Route path="/metal" element={<Metal/>} />
          <Route path="/stainless_still" element={<ProductItems data={products.Stainless_Steel}/>} />
          <Route path="/electric_motor" element={<ProductItems data={products.Electric_Motor}/>} />
          <Route path="/rubber" element={<ProductItems data={products.Rubber}/>} />
          <Route path="/compressor_scrap" element={<ProductItems data={products.Compressor_Scrap}/>} />
          <Route path="/cast_iron" element={<ProductItems data={products.Cast_Iron}/>} />
          <Route path="/aluminium" element={<ProductItems data={products.Aluminium}/>} />
          <Route path="/kraft_carrier_board" element={<ProductItems data={products.KRAFT_CARRIER_BOARD}/>} />
          <Route path="/kraft_unshredded" element={<ProductItems data={products.KRAFT_UNSHREDDED}/>} />
          <Route path="/virgin_kraft" element={<ProductItems data={products.VIRGIN_KRAFT_LINER_BOARD}/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/awards" element={<Quality/>} />
          {/* <Route path="/electric_motor" element={<ProductItems data={products}/>} /> */}
 
          
         
         
           
          
          
        </Routes>
    {/* <AboutUs></AboutUs> */}
    
      {/* <ProductItems/> */}
      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
