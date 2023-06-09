import {Routes,Route} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeauteredProducts";
import { NewProducts } from "./components/NewProducts";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='order-summary' element={<OrderSummary/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}></Route>
        <Route path='featured' element={<FeaturedProducts/>}></Route>
        <Route path='new' element={<NewProducts/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
