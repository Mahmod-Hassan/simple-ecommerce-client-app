import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const ratings = [];

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

  const { title, image, price, rating, variation } = product;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratings.push(<FaStar className="text-yellow-500" key={i} />);
    } else {
      ratings.push(<FaRegStar className="text-yellow-500" />);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-10 content-center h-screen">
      <div className="border max-h-[400px]">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="col-span-2 space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
        <p className="text-lg font-semibold">
          Price : <span className="text-blue-600">${price}</span>
        </p>
        <div className="flex">{ratings}</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quia
          nesciunt veniam cum temporibus, totam rem id dolore facere repellat ea
          labore quos omnis nisi commodi quam molestias nihil vitae!
        </p>
        <div className="flex items-center">
          <p>Size :</p>
          {variation?.sizes.map((size) => (
            <button
              className="border rounded border-gray-800 mx-2 px-2 hover:bg-blue-500 hover:text-white"
              type="button"
              key={size}
            >
              {size}
            </button>
          ))}
        </div>
        <p>Selected Color - </p>
        <div className="flex items-center gap-3">
          <p>Colors :</p>
          <div className="flex gap-5 items-center">
            {variation?.colors.map((color) => (
              <button
                style={{ backgroundColor: color }}
                className="w-5 h-5 rounded-full ring"
                type="button"
                key={color}
              ></button>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 px-4 py-1 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
