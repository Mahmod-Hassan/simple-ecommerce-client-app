import React from "react";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import { getAllProduct } from "../../hooks/useFetchProduct";

const Products = () => {
  const { products, loading } = getAllProduct();

  // handle loading state
  if (loading) {
    return <Loader />;
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
