import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/about/About.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import NotFound from "./pages/pageNotFound/NotFound.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import Product from "./pages/product/Product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="//products/category/:categorySlug" element={<App />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        {/* handl page not found */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
