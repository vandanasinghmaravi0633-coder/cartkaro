import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from './component/EcommerceUI/Signup.jsx';
import Login from './component/EcommerceUI/Login.jsx';
import Home from './component/EcommerceUI/Home.jsx';
import About from './component/EcommerceUI/About.jsx';
import Contact from './component/EcommerceUI/Contact.jsx';
import Navbar from './component/EcommerceUI/Navbar.jsx';
import Footer from './component/EcommerceUI/Footer.jsx';

import DashboardComp from './component/Dashboard/DashboardComp.jsx';
import Users from './component/Dashboard/Users.jsx';
import Products from './component/Dashboard/Products.jsx';
import UpdateProduct from './component/Dashboard/UpdateProduct.jsx';
import Orders from './component/Dashboard/Orders.jsx';
import Sidebar from './component/Sidebar.jsx';
import ProtectedRoute from './component/Dashboard/ProtectedRoute.jsx';

import AdminLogin from './component/admin/AdminLogin.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import AddProduct from './component/Products/AddProduct.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path="products" element={<Products />} />
        <Route path="update-product/:id" element={<UpdateProduct />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>}>
          <Route index element={<DashboardComp />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      <Footer />


    </>
  );
}

export default App;
