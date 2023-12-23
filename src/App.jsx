import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-5">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
