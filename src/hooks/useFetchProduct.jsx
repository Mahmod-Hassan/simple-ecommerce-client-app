import { useEffect, useState } from "react";

export const getAllProduct = () => {
  // get all products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/products`);
        const data = await res.json();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

// get product by id
export const getProductById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/products/${id}`);
        const data = await res.json();
        setLoading(false);
        setProduct(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return { product, loading, error };
};
