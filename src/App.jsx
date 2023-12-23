import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
