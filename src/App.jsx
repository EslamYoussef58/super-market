import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from './Components/Cart'
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import NotFoundPage from "./Components/NotFoundPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return (
    <div>
      <Router>
      <ToastContainer />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/*" element={<NotFoundPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
