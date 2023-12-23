import React, { useEffect, useState } from "react";
import Product from "../../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    };
    getProducts();
  }, []);

  // handle loading state
  if (loading) {
    return "Loading...";
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <Product key={product?._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
