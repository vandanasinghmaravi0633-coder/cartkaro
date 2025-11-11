import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Signup from './component/Signup.jsx';
import Login from './component/E-Commerce/Login.jsx';
import Home from './component/E-Commerce/Home.jsx';
import About from './component/E-Commerce/About.jsx';
import Contact from './component/E-Commerce/Contact.jsx';
import Navbar from './component/E-Commerce/Navbar.jsx';  
import Footer from './component/E-Commerce/Footer.jsx';
import ProductPage from "./component/E-Commerce/ProductPage";
import VerifyUser from "./component/E-Commerce/VerifyUser.jsx"
import VerifyLoginOtp from './component/E-Commerce/VerifyLoginOtp.jsx';





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
        <Route path="/products" element={<ProductPage />} />
        <Route path= "/verify-otp" element = {<VerifyUser/>}/>
        <Route path="/verify-login-otp" element={<VerifyLoginOtp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
























































































// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import AdminSignup from "./component/AdminSignup";
// import AdminLogin from "./component/AdminLogin";
// import Dashboard from "./pages/Dashboard";
// import Orders from './pages/Orders.jsx';
// import Products from "./pages/Products.jsx";
// // import Home from "./pages/Home.jsx";

// import UserLogin from "./component/UserLogin.jsx";
// import UserSignup from "./component/UserSignup.jsx";
// // import Verified from './component/Verified.jsx';


// import Navbar from "./component/E-Commerce/Navbar.jsx";
// import Home from './pages/Home.jsx';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './component/E-Commerce/Login';
// import Signup from './component/E-Commerce/Signup';





// function App() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<Navigate to="/admin/login" />} />
//         <Route path="/home" element={<Home/>} />
//         {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/dashboard" element={<Dashboard />} />

    
//         <Route path="User/signup" element={<UserSignup />} />
//         <Route path="/User/login" element={<UserLogin />} />
//         <Route path="/User/verified" element={<verifiedLogin />} />

//         <Route path="/"element={<Home/>}/>
//         <Route path="/about"element={<About/>}/>
//         <Route path="/contact"element={<Contact/>}/>
//         <Route path="/Login"element={<Login/>}/>
//         <Route path="/Signup"element={<Signup/>}/>




//       </Routes>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import Signup from './component/Signup.jsx';
// import Login from './component/Login.jsx';
// import Forget from './component/Forget.jsx';

// import Sidebar from './component/Sidebar.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Products from './pages/Products.jsx';
// import Orders from './pages/Orders.jsx';
// import Users from './pages/Users.jsx';



// // import { Route,Routes } from 'react-router-dom';

// function App(props) {
//   return (
//     // <BrowserRouter>
//     <div style={{ display: 'flex'}}>
//     <Sidebar/>
//     <div style={{ flex:1, padding: '20px'}}></div>
//     <Routes>

//       {/* <Route path ="/" element={<Signup/>}  ></Route> */}
//       {/* <Route path ="/login" element={<Login/>}  ></Route> */}
//       {/* <Route path ="/Forget" element={<Forget/>}  ></Route> */}


//       <Route path='/dashboard' element ={<Dashboard/>} />
//       <Route path='/products' element ={<Products/>} />
//       <Route path='/orders' element ={<Orders/>} />
//       <Route path='/users' element ={<Users/>} />


//     </Routes>
//     </div>
//     // </BrowserRouter>
//   );
// }

// export default App;
