import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSingleProductById = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/products/${id}`);
      const data = await res.json();
      setLoading(false);
      setProduct(data);
    };
    getSingleProductById();
  }, []);

  // handle loading state
  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
