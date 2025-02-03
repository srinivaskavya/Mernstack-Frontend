import { Route ,Routes} from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Header from './Components/Layout/Header';

import LogUp from './pages/SignUp';
import ConfirmOrder from './pages/ConfirmOrder';


function App() {
  return (
    
    
    <Routes>
<Route path ="/" element={<ProductList/>}/>
<Route path ="/products/:id" element={<Product/>}/>
<Route path ="/cart" element={<Cart/>}/>
<Route path ="/signin" element={<Login/>}/>
<Route path ="/signup" element={<LogUp/>}/>
<Route path ="/about" element={<AboutUs/>}/>
<Route path ="/contact" element={<ContactUs/>}/>
<Route path ="/placeorder" element={<PlaceOrder/>}/>
<Route path ="/confirmorder" element={<ConfirmOrder/>}/>

    </Routes>
    
    
  );
}

export default App;