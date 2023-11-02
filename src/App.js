import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import AddProduct from "./components/AddProduct";
import { ProductProvider } from "./context/ProductContext"; // Update the context import

function App() {
  return (
    <BrowserRouter>
      <ProductProvider> {/* Use ProductProvider instead of BlogProvider */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="addproduct" element={<AddProduct />} /> {/* Updated route for adding a product */}
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<SingleProduct />} /> {/* Updated route for a single product */}
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
