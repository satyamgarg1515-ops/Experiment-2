import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">React Router Demo</h1>

      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product/101">Product 101</NavLink>
        <NavLink to="/product/shoes">Product Shoes</NavLink>
      </nav>

      {/* Content Card */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
