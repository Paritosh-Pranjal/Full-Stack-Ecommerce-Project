import "./App.css";
import Footer from "./customer/components/Footer/footer";
import Navigation from "./customer/components/Navigation/navigation";
import Product from "./customer/components/Product/product";
import HomePage from "./customer/pages/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
