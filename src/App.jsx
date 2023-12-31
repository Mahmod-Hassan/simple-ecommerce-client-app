import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./layout/Main";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="bg-gray-100">
      <Toaster />
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Products />} />
            <Route
              path="/:id"
              element={
                <PrivateRoute>
                  <ProductDetails />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
