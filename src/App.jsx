import { useEffect, useState } from "react";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto p-5">
        {products.map((product) => (
          <Product key={product?.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

export default App;
