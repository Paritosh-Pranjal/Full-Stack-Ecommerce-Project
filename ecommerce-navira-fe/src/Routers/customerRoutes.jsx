import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../customer/pages/HomePage/homePage";
import Cart from "./../customer/components/Cart/cart";
import Navigation from "../customer/components/Navigation/navigation";
import Footer from "../customer/components/Footer/footer";
import Product from "../customer/components/Product/product";
import ProductDetails from "../customer/components/ProductDetails/productDetails";
import Checkout from "./../customer/components/Checkout/checkout";
import Order from "./../customer/components/Order/order";
import OrderDetails from "./../customer/components/Order/orderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
