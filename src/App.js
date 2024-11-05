import "./App.css";
import Cart from "./customer/components/Cart/cart";
import Checkout from "./customer/components/Checkout/checkout";
import Footer from "./customer/components/Footer/footer";
import Navigation from "./customer/components/Navigation/navigation";
import Product from "./customer/components/Product/product";
import ProductDetails from "./customer/components/ProductDetails/productDetails";
import HomePage from "./customer/pages/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
