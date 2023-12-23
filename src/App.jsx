import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Products />} />
            <Route path="/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
